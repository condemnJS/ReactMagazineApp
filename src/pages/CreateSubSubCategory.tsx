import React, { useEffect } from 'react';
import { Button } from '../components/FormComponents/Button';
import { Input } from '../components/FormComponents/Input';
import {useDispatch} from "react-redux";
import { useTypedSelector } from '../hooks/useTypedSelector';
import {CLEAN_ERRORS, FETCH_GET_SUBS_CATEGORIES, SUBSUBCATEGORY_CREATE_FETCH, CLEAN_SUBSUBCATEGORY} from '../redux/types';
import {Message} from "../components/FormComponents/Message";
import {Select} from "../components/FormComponents/Select";

export const CreateSubSubCategory: React.FC = () => {
    const [category, setCategory] = React.useState({'title': '', 'subcategory_id': '', 'image': null});
    const dispatch = useDispatch();
    const {errors} = useTypedSelector(state => state.errors);
    const {subscategories} = useTypedSelector(state => state.subscategories);
    const {is_created_subsubcategory} = useTypedSelector(state => state.is_created_subsubcategory);

    useEffect(() => {
        dispatch({type: FETCH_GET_SUBS_CATEGORIES});
    }, []);

    const createSubSubCategory = (event: MouseEvent) => {
        event.preventDefault();
        dispatch({type: CLEAN_SUBSUBCATEGORY});
        dispatch({type: CLEAN_ERRORS});
        const formData = new FormData();
        const image = category['image'];
        console.log(category)
        if(image) {
            formData.append("image", image[0]);
        }
        formData.append('title', category.title);
        formData.append('subcategory_id', category.subcategory_id);
        console.log(formData);
        dispatch({type: SUBSUBCATEGORY_CREATE_FETCH, params: formData});
    }

    return (
        <div className="mainAdmin">
            <div className="admin__head">
                <h2>Создать подподкатегорию</h2>
            </div>
            <div className="admin__body">
                {is_created_subsubcategory && 
                    <Message message={is_created_subsubcategory.message}/> 
                }
                <form method="POST" encType="multipart/form-data">
                    <Input label="Введите название подподкатегории" type="text" name="title" labelStyle="admin__label" error={errors.body?.title} inputStyle="admin__input" setState={(target: string, value: string) => setCategory({...category, [target]: value})}/>
                    <Input label="Загрузите фото" type="file" name="image" labelStyle="admin__label" error={errors.body?.image} setState={(target: string, value: string) => setCategory({...category, [target]: value})}/>
                    <Select name="subcategory_id" options={subscategories} selectStyle={'admin__select'} error={errors.body?.category_id} label={'Выберите подкатегорию к которой будет привязана подподкатегория'} labelStyle={'admin__label'} setState={(target: string, value: string) => setCategory({...category, [target]: value})}/> 
                    <Button value="Создать" className="admin_btn" onClick={createSubSubCategory}/> 
                </form>
            </div>
        </div>
    );
}