import React from "react";
import {BaseCategoryPropsI} from "../../redux/types";

interface RetractablePanelPropsI {
    headerLayoutWrapper: any,
    categories: any,
    subcategories?: any,
    scrollAnimatedChangeData: any,
    slugRef: string
}

interface CategoriesPropsI extends BaseCategoryPropsI {
    icon: string
    image?: string
}

interface SubCategoriesPropsI extends BaseCategoryPropsI {
    subcategories: Array<object>,
}

interface CatPropsI extends BaseCategoryPropsI {
    subsubcategory: Array<BaseCategoryPropsI>
}

export const RetractablePanel: React.FC<RetractablePanelPropsI> = ({headerLayoutWrapper, categories, scrollAnimatedChangeData, subcategories, slugRef}) => {
    return (
        <div className={'header__layoutWrapper'} ref={headerLayoutWrapper}>
            <div className="container h-100 d-f">
                <div className="wrap__categories">
                    {categories.map((item: CategoriesPropsI) => {
                        return (
                            <a className={`item_category d-f al-c${item.slug === slugRef ? ' active__category' : ''}`}
                               href={item.slug} key={item.id}
                               onMouseMove={scrollAnimatedChangeData}>
                                <img src={"../../img/icons/categories/" + item.icon} alt="icon"/>
                                <span>{item.title}</span>
                            </a>
                        );
                    })}
                </div>
                <div className="wrap__subcategories">
                    {subcategories.map(({subcategories, id, slug, title}: SubCategoriesPropsI) => {
                        if (slug === slugRef) {
                            let subs: any = [];
                            let $elms: any = [];
                            let delimetr = Math.ceil(subcategories.length / 3);
                            subcategories.forEach((el: any) => {
                                $elms.push(el);
                                if (el.id % delimetr === 0) {
                                    subs.push($elms);
                                    $elms = [];
                                }
                            })
                            return (
                                <div key={id}>
                                    <a href={slug} className={'category___title'}>{title}</a>
                                    <div className={'subcategories d-f ju-sb'}>
                                        {subs.map((sub: Array<CatPropsI>, key: number) => {
                                            return (
                                                <div className={'sub__block'} key={key}>
                                                    {sub.map(({subsubcategory, slug, id, title}) => {
                                                        return (
                                                            <div className="subcategories__item mb-3" key={id}>
                                                                <a className="sub__title"
                                                                   href={slug}>{title}</a>
                                                                <div className="sub__items d-f fl-c">
                                                                    {subsubcategory.map(subsub => {
                                                                        return (
                                                                            <a href={subsub.slug}
                                                                               key={subsub.id}>{subsub.title}</a>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
