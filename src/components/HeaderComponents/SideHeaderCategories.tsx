import React from "react";

interface SideHeaderCategoriesPropsI {
    categories: Array<object>
}

export const SideHeaderCategories: React.FC<SideHeaderCategoriesPropsI> = ({categories}) => {
    return (
        <div className="header__side w-100 d-f al-c">
            <div className="container d-f al-c w-100">
                <div className="side__marker d-f al-c">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                         className="svg-inline--fa fa-map-marker-alt fa-w-12" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor"
                              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg>
                    <span>Томск</span>
                </div>
                <div className="side__categories">
                    <nav className={'d-f'}>
                        {categories.map(({slug, id, title}: any) => {
                            return (
                                <a href={slug} key={id}>{title}</a>
                            );
                        })}
                        <a href="#" className={'start_sell'}>Продавать на Маркете</a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
