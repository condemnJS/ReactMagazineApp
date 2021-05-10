import React from 'react';
import {useCallback, useState, useEffect} from 'react';
import {useFetch} from "../hooks/useFetch";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {FETCH_GET_CATEGORY, FETCH_GET_ORDERS_WTIH_SUBSUBCATEGORIES_BY_SLUG, FETCH_GET_SUBCATEGORIES_BY_SLUG, GET_CATEGORY, GET_SUBS_CATEGORIES} from "../redux/types";
import {BaseCategoryPropsI} from "../redux/types";
import CategoryCard from "../components/CategoryCard";
import { OrdersSlider } from '../components/OrdersComponents/OrdersSlider';


interface subcategoryItemPropsI extends BaseCategoryPropsI{
    subsubcategory: Array<BaseCategoryPropsI>
}

interface categoryItemPropsI extends BaseCategoryPropsI{
    subCategories: Array<subcategoryItemPropsI>,
}
interface CategoryItemI {
    category: categoryItemPropsI,
    location: string
}



const CategoryItemComponent: React.FC<CategoryItemI> = ({category, location}) => {
    const dispatch = useDispatch();
    const {subscategories} = useTypedSelector(state => state.subscategories);
    const {orders_categories} = useTypedSelector(state => state.orders_categories) 

    useEffect(() => {
        dispatch({type: FETCH_GET_SUBCATEGORIES_BY_SLUG, slug: location});
        dispatch({type: FETCH_GET_ORDERS_WTIH_SUBSUBCATEGORIES_BY_SLUG, slug: location})
    }, []);
    console.log(orders_categories);
    return (
        <div>
            <h1 className={'category__title'}>{category.title}</h1>
            <div className={'category__content d-f'}>
                <div className={'subcategories__wrapper'}>
                    {category.subCategories.map((subcategory)  => {
                        return (
                            <div className={'subcategories__element'} key={subcategory.id}>
                                <strong className={'subcategories__title'}><a href={subcategory.slug}>{subcategory.title}</a></strong>
                                <div className={'subsubcategories__wrapper'}>
                                    {subcategory.subsubcategory.map((subsubitem) => {
                                        return (
                                            <a key={subsubitem.id} href={subsubitem.slug} className={'subsubcategories__element'}>{subsubitem.title}</a>
                                        )
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <div className="subsubcategories_wrapper_cards">
                        <h2>Покупайте товары на ТатарМаркете</h2>
                        <div className="subsubcategories_cards_items d-f fl-w">
                            {subscategories.map((item, key) => {
                                return <CategoryCard el={item} key={key}/>
                            })}
                        </div>
                    </div>
                    <div className="categories_orders">
                        {orders_categories.map((item: any, key) => {
                            return (
                                <div>
                                    <h2>{item.title}</h2>
                                    <div>
                                        <OrdersSlider orders={item.orders}/> 
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const SubSubCategoryItemComponent: React.FC = () => {
    return (
        <div>
            <h1>Под татарин</h1>
        </div>
    );
}

const CommonCategoryItemComponent: React.FC = () => {
    return (
        <div>
            <h1>Обычный компонент</h1>
        </div>
    )
}

export const CategoryItem: React.FC = (props: any) => {
    const locationHref = props.match.params.slug // Наш текущий slug в url, с помощью его будем делать запроос на сервер
    const [categoryCard, setCategoryCard] = useState([]);
    const dispatch = useDispatch();
    const {category} = useTypedSelector(state => state.category);
    useEffect(() => {
        dispatch({type: FETCH_GET_CATEGORY, slug: locationHref});
        category.subCategories.forEach(item => {
            setCategoryCard((state: any) => state.push(item.subsubcategory[0]))
        });
        console.log(category)
    }, []);
    return (
        <div style={{zIndex: -1}}>
            <div className="container">
                {category.subCategories
                    ? <CategoryItemComponent category={category} location={locationHref}/>
                    : category.subsubcategory
                    ? <SubSubCategoryItemComponent />
                    : category.slug
                    ? <CommonCategoryItemComponent /> : ''
                }
            </div>
        </div>
    )
}
