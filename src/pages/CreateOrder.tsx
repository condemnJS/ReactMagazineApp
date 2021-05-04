import React, {MouseEvent, useEffect, useState} from 'react';
import {Input} from "../components/FormComponents/Input";
import {Select} from "../components/FormComponents/Select";
import {Button} from "../components/FormComponents/Button";
import {Message} from "../components/FormComponents/Message";
import { Textarea } from '../components/FormComponents/Textarea';
import {useDispatch} from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { CLEAN_ERRORS, FETCH_CREATE_ORDER, FETCH_GET_SUB_SUBS_CATEGORIES } from '../redux/types';

export const CreateOrder: React.FC = () => {
    const [order, setOrder] = useState({'title': '', 'description': '', 'price': '', 'images': [], 'subsubcategory_id': ''});
    const dispatch = useDispatch();
    const {subssubcategories} = useTypedSelector(state => state.subssubcategories);
    const {errors} = useTypedSelector(state => state.errors);
    const {is_created_order} = useTypedSelector(state => state.is_created_order);

    useEffect(() => {
        dispatch({type: FETCH_GET_SUB_SUBS_CATEGORIES});
    }, []);

    const createOrder = (event: MouseEvent) => {
        dispatch({type: CLEAN_ERRORS});
        event.preventDefault();
        const image = order['images'];
        const formData = new FormData();
        if(image) {
            for(let i = 0; i < image.length; i++) {
                formData.append('images[' + i + ']', image[i]);
            }
        }
        formData.append("title", order.title);
        formData.append("description", order.description);
        formData.append("price", order.price);
        formData.append("subsubcategory_id", order.subsubcategory_id);
        dispatch({type: FETCH_CREATE_ORDER, params: formData});
        
        console.log(order);
    }
    console.log(is_created_order)
    return (
        <div className="mainAdmin">
            <div className="admin__head">
                <h2>Создать товар</h2>
            </div>
            <div className="admin__body">
                {is_created_order && 
                    <Message message={is_created_order.message}/> 
                }
                <form action="" encType="multipart/form-data">
                    <Input error={errors.body?.title} label="Введите название товара" type="text" name="title" labelStyle="admin__label" inputStyle="admin__input" setState={(target: string, value: string) => setOrder({...order, [target]: value})}/>
                    <Input error={errors.body?.images} label="Загрузите фото" multiple type="file" name="images" labelStyle="admin__label" setState={(target: string, value: string) => setOrder({...order, [target]: value})}/>
                    <Input error={errors.body?.price} label="Введите цену товара" type="text" name="price" labelStyle="admin__label" inputStyle="admin__input" setState={(target: string, value: string) => setOrder({...order, [target]: value})}/>
                    <Textarea error={errors.body?.description} name="description" label="Введите описание товара" labelStyle="admin__label" textAreaStyle={'admin__input'} setState={(target: string, value: string) => setOrder({...order, [target]: value})}/> 
                    <Select error={errors.body?.subsubcategory_id} name="subsubcategory_id" options={subssubcategories} selectStyle={'admin__select'} label={'Выберите подподкатегорию к которой будет привязан товар'} labelStyle={'admin__label'} setState={(target: string, value: string) => setOrder({...order, [target]: value})}/> 
                    <Button value="Создать" className="admin_btn" onClick={createOrder}/> 
                </form>
            </div>
        </div>
    );
}