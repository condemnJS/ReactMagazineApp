import React from 'react';
import {useCallback, useState, useEffect} from 'react';
import {useFetch} from "../hooks/useFetch";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {FETCH_GET_CATEGORY, GET_CATEGORY} from "../redux/types";
import {BaseCategoryPropsI} from "../redux/types";
import {CategoryCard} from "../components/CategoryCard";


interface subcategoryItemPropsI extends BaseCategoryPropsI{
    subsubcategory: Array<BaseCategoryPropsI>
}

interface categoryItemPropsI extends BaseCategoryPropsI{
    subCategories: Array<subcategoryItemPropsI>,
}
interface CategoryItemI {
    category: categoryItemPropsI
}



const SubCategoryItemComponent: React.FC<CategoryItemI> = ({category}) => {
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
                <div className="subsubcategories_wrapper_cards">
                    <CategoryCard />
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
    let renderComponent: any;
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
                    ? <SubCategoryItemComponent category={category}/>
                    : category.subsubcategory
                    ? <SubSubCategoryItemComponent />
                    : category.slug
                    ? <CommonCategoryItemComponent /> : ''
                }
            </div>
        </div>
    )
}
