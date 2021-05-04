import React from 'react';
import Logo from "../assets/logo.png";
import {NavLink} from "react-router-dom";

export const SideBar = () => {
    const dropAnimate = (event: React.MouseEvent) => {
        let targetElement: any = event.target;
        if(!targetElement.classList.contains('sidebar__dropBtn')) {
            targetElement = targetElement.parentElement;
        }
        if(parseInt(targetElement.parentElement.style.height) > 53) {
            targetElement.parentElement.style.height = 53 + 'px';
        }
        else if(!targetElement.parentElement.classList.contains('dropDown')) {
            targetElement.parentElement.style.height = Array.prototype.reduce.call(targetElement.parentElement.childNodes, (p, c) => {
                return p + (c.offsetHeight  || 53);
            }, -1) + 'px';
        }
    }
    return (
        <div className={"sidebar__wrapper"}>
            <div className={'sidebar__logo'}>
                <img src={Logo} alt=""/>
                <h2>ТатарМаркет</h2>
            </div>
            <div className={'sidebar__props'}>
                <div className={'sidebar__element'} onClick={dropAnimate.bind(null)}>
                    <div className={'sidebar__dropBtn'}>
                        <span>Категории</span>
                    </div>
                    <div className={'dropWrapper'}>
                        <nav>
                            <li>
                                <NavLink to={'/admin/category/create'} activeClassName="admin__nav__selected">Создать категорию</NavLink> 
                            </li>
                            <li>
                                <NavLink to={'/admin/category/all'} activeClassName="admin__nav__selected">Все катогрии</NavLink> 
                            </li>
                        </nav>
                    </div>
                </div>
                <div className={'sidebar__element'} onClick={dropAnimate.bind(null)}>
                    <div className={'sidebar__dropBtn'}>
                        <span>ПодКатегории</span>
                    </div>
                    <div className={'dropWrapper'}>
                        <nav>
                            <li>
                                <NavLink to={'/admin/subcategory/create'} activeClassName="admin__nav__selected">Создать подкатегорию</NavLink> 
                            </li>
                            <li>
                                <NavLink to={'/admin/subcategory/all'} activeClassName="admin__nav__selected">Все подкатогрии</NavLink> 
                            </li>
                        </nav>
                    </div>
                </div>
                <div className={'sidebar__element'} onClick={dropAnimate.bind(null)}>
                    <div className={'sidebar__dropBtn'}>
                        <span>ПодПодКатегории</span>
                    </div>
                    <div className={'dropWrapper'}>
                        <nav>
                            <li>
                                <NavLink to={'/admin/subsubcategory/create'} activeClassName="admin__nav__selected">Создать подподкатегорию</NavLink> 
                            </li>
                            <li>
                                <NavLink to={'/admin/subsubcategory/all'} activeClassName="admin__nav__selected">Все подподкатегории</NavLink> 
                            </li>
                        </nav>
                    </div>
                </div>
                <div className={'sidebar__element'} onClick={dropAnimate.bind(null)}>
                    <div className={'sidebar__dropBtn'}>
                        <span>Пользователи</span>
                    </div>
                    <div className={'dropWrapper'}>
                        <nav>
                            <li>
                                <a href="#">Создать пользователя</a>
                            </li>
                            <li>
                                <a href="#">Все пользователи</a>
                            </li>
                        </nav>
                    </div>
                </div>
                <div className={'sidebar__element'} onClick={dropAnimate.bind(null)}>
                    <div className={'sidebar__dropBtn'}>
                        <span>Товары</span>
                    </div>
                    <div className={'dropWrapper'}>
                        <nav>
                            <li>
                                <NavLink to={'/admin/order/create'} activeClassName="admin__nav__selected">Создать товар</NavLink> 
                            </li>
                            {/* <li>
                                <a href="#">Все пользователи</a>
                            </li> */}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}