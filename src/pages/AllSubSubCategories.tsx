import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import CategoryCard  from '../components/CategoryCard';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { FETCH_GET_SUB_SUBS_CATEGORIES } from '../redux/types';

export const AllSubSubCategories = () => {
    const {subssubcategories} = useTypedSelector(state => state.subssubcategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: FETCH_GET_SUB_SUBS_CATEGORIES});
    }, []);

    console.log(subssubcategories);

    return (
        <div className="mainAdmin">
            <div className="admin__head">
                <h2>Все ПодПодкатегории</h2>
            </div>
            <div className="admin__body d-f fl-w allCategories">
                {subssubcategories.map((item, key) => {
                    return <CategoryCard key={key} el={item}/>
                })}
            </div>
        </div>
    );
}