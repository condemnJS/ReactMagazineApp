import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import CategoryCard from '../components/CategoryCard';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {FETCH_GET_SUBS_CATEGORIES} from "../redux/types";

export const AllSubCategories = () => {
    const {subscategories} = useTypedSelector(state => state.subscategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: FETCH_GET_SUBS_CATEGORIES});
    }, []);

    return (
        <div className="mainAdmin">
            <div className="admin__head">
                <h2>Все Подкатегории</h2>
            </div>
            <div className="admin__body d-f fl-w allCategories">
                {subscategories.map((item, key) => {
                    return <CategoryCard key={key} el={item}/>
                })}
            </div>
        </div>
    );
}