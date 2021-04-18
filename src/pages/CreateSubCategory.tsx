import React, { useEffect } from 'react';
import { Button } from '../components/FormComponents/Button';
import { Input } from '../components/FormComponents/Input';
import {useDispatch} from "react-redux";
import { useTypedSelector } from '../hooks/useTypedSelector';
import {SUBCATEGORY_CREATE_FETCH, FETCH_GET_CATEGORIES, CLEAN_ERRORS, CLEAN_SUBCATEGORY} from '../redux/types';
import {Message} from "../components/FormComponents/Message";
import {Select} from "../components/FormComponents/Select";

export const CreateSubCategory: React.FC = () => {
    const [category, setCategory] = React.useState({'title': '', 'category_id': '', 'image': null});
    const dispatch = useDispatch();
    const {errors} = useTypedSelector(state => state.errors);
    const {categories} = useTypedSelector(state => state.categories);
    const {is_created_subcategory} = useTypedSelector(state => state.is_created_subcategory);

    useEffect(() => {
        dispatch({type: FETCH_GET_CATEGORIES});
    }, []);

    const createSubCategory = (event: MouseEvent) => {
        dispatch({type: CLEAN_SUBCATEGORY});
        dispatch({type: CLEAN_ERRORS});
        event.preventDefault();
        const formData = new FormData();
        const image = category['image'];
        if(image) {
            formData.append("image", image[0]);
        }
        formData.append('title', category.title);
        formData.append('category_id', category.category_id);
        dispatch({type: SUBCATEGORY_CREATE_FETCH, params: formData});
        console.log(errors);
    }

    return (
        <div className="mainAdmin">
            <div className="admin__head">
                <h2>Создать подкатегорию</h2>
            </div>
            <div className="admin__body">
                {is_created_subcategory && 
                    <Message message={is_created_subcategory.message}/> 
                }
                <form action="" encType="multipart/form-data">
                    <Input label="Введите название подкатегории" type="text" name="title" labelStyle="admin__label" error={errors.body?.title} inputStyle="admin__input" setState={(target: string, value: string) => setCategory({...category, [target]: value})}/>
                    <Input label="Загрузите фото" type="file" name="image" labelStyle="admin__label" error={errors.body?.image} setState={(target: string, value: string) => setCategory({...category, [target]: value})}/>
                    <Select name="category_id" options={categories} selectStyle={'admin__select'} error={errors.body?.category_id} label={'Выберите категорию к которой будет привязана подкатегория'} labelStyle={'admin__label'} setState={(target: string, value: string) => setCategory({...category, [target]: value})}/> 
                    <Button value="Создать" className="admin_btn" onClick={createSubCategory}/> 
                </form>
            </div>
        </div>
    );
}