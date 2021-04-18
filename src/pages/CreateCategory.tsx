import React, { MouseEvent } from 'react';
import { Button } from '../components/FormComponents/Button';
import { Input } from '../components/FormComponents/Input';
import {useDispatch} from "react-redux";
import { useTypedSelector } from '../hooks/useTypedSelector';
import {CATEGORY_CREATE_FETCH, CLEAN_ERRORS, CLEAN_CATEGORY } from '../redux/types';
import {Message} from "../components/FormComponents/Message";

interface IcreateCategory {
    name: string,
    image: File | null
}

export const CreateCategory: React.FC = () => {
    const [category, setCategory] = React.useState({'name': '', 'image': null});
    const dispatch = useDispatch();
    const {errors} = useTypedSelector(state => state.errors);
    const {is_created_category} = useTypedSelector(state => state.is_created_category);


    let createCategory = (event: MouseEvent) => {
        dispatch({type: CLEAN_ERRORS});
        dispatch({type: CLEAN_CATEGORY});
        event.preventDefault();
        const image = category['image'];
        const formData = new FormData();
        if(image) {
            formData.append("image", image[0]);
        }
        formData.append("title", category.name);
        dispatch({type: CATEGORY_CREATE_FETCH, params: formData})
    }
    return (
        <div className="mainAdmin">
            <div className="admin__head">
                <h2>Создать категорию</h2>
            </div>
            <div className="admin__body">
                {is_created_category && 
                    <Message message={is_created_category.message}/> 
                }
                <form action="" encType="multipart/form-data">
                    <Input label="Введите название категории" type="text" name="name" labelStyle="admin__label" error={errors.body?.title} inputStyle="admin__input" setState={(target: string, value: string) => setCategory({...category, [target]: value})}/>
                    <Input label="Загрузите фото" type="file" name="image" labelStyle="admin__label" error={errors.body?.image} setState={(target: string, value: string) => setCategory({...category, [target]: value})}/>
                    <Button value="Создать" className="admin_btn" onClick={createCategory}/> 
                </form>
            </div>
        </div>
    );
}