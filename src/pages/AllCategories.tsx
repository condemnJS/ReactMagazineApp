import React, { useEffect } from 'react';
import CategoryCard from "../components/CategoryCard";
import {useDispatch} from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { FETCH_GET_CATEGORIES } from '../redux/types';

export const AllCategories = () => {
    const dispatch = useDispatch();
    const {categories} = useTypedSelector(state => state.categories);

    useEffect(() => {
        dispatch({type: FETCH_GET_CATEGORIES});
    }, []);

    console.log(categories);

    return (
        <div className="mainAdmin">
            <div className="admin__head">
                <h2>Все категории</h2>
            </div>
            <div className="admin__body d-f fl-w allCategories">
                {categories.map((item, key) => {
                    return <CategoryCard key={key} el={item}/>
                })}
            </div>
        </div>
    );
}