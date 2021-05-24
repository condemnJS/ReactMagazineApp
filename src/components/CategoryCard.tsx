import React from 'react';
import Drop from "../assets/crud/trash.svg";
import Edit from "../assets/crud/edit.svg";
import { useHistory } from 'react-router';
import {useDispatch} from "react-redux";
import {
    FETCH_DELETE_CATEGORY,
    FETCH_DELETE_SUBCATEGORY, FETCH_DELETE_SUBSUBCATEGORY,
    FETCH_GET_CATEGORIES,
    FETCH_GET_SUBS_CATEGORIES,FETCH_GET_SUB_SUBS_CATEGORIES
} from "../redux/types";

interface ItemProps {
    id: number,
    title: string,
    icon: string | null,
    slug: string,
    image: string
}

interface Props {
    el: any
}

const CategoryCard: React.FC<Props> = ({el}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(el)
    const deleteCurrentElement = (id: string) => {
        if(el.category_id) {
            dispatch({type: FETCH_DELETE_SUBCATEGORY, id})
        } else if(el.subcategory_id) {
            console.log('татар')
            dispatch({type: FETCH_DELETE_SUBSUBCATEGORY, id})
        } else {
            dispatch({type: FETCH_DELETE_CATEGORY, id})
        }
        setTimeout(() => dispatch({type: FETCH_GET_CATEGORIES}), 500);
        setTimeout(() => dispatch({type: FETCH_GET_SUBS_CATEGORIES}), 500);
        setTimeout(() => dispatch({type: FETCH_GET_SUB_SUBS_CATEGORIES}), 500);
    }
    return (
        <div onClick={() => !history.location.pathname.includes('admin') ? window.location.href = `/${el.slug}` : ''} className={`category_card${history.location.pathname.includes('admin') ? ' animate_category_card' : ''}`}>
            <img src={el.image} alt=""/>
            {history.location.pathname.includes('admin') ?
                    <div className="d-f fl-c">
                        <img src={Drop} alt="" className="icon_admin drop" onClick={() => deleteCurrentElement(el.id)}/>
                        <img src={Edit} alt="" className="icon_admin edit"/>
                    </div>   
            : ''}
            <strong>{el.title}</strong>
        </div>
    );
}

export default CategoryCard;