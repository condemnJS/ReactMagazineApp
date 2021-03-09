import React, {Fragment, useState, useEffect, useCallback, useRef, useContext, MouseEventHandler, FC,} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {FETCH_GET_CATEGORIES, FETCH_GET_SUB_CATEGORIES} from "../redux/types";
import {Context} from "../context";
import {SideHeaderCategories} from "./HeaderComponents/SideHeaderCategories";
import {MainHeader} from "./HeaderComponents/MainHeader";
import {TopAdvertisingComponent} from "./HeaderComponents/TopAdvertisingComponent";
import {RetractablePanel} from "./HeaderComponents/RetractablePanel";

const Header = () => {
    const catalogBtn = document.querySelectorAll('.catalogLogo div');
    const {toggleLayoutStyles} = useContext(Context);
    const headerLayoutWrapper = useRef<HTMLDivElement>(null);
    const [slugRef, setSlugRef] = useState('pokupki');
    // С помощью Redux и TypeScript, написали свой хукк получения состояния
    const {categories} = useTypedSelector(state => state.categories);
    const {subcategories} = useTypedSelector(state => state.subcategories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: FETCH_GET_CATEGORIES, limit: 7});
        dispatch({type: FETCH_GET_SUB_CATEGORIES})
    }, []);

    const toggleBtnCatalog = () => {
        console.log('fired')
        catalogBtn[0].classList.toggle('active__catalog_1');
        catalogBtn[1].classList.toggle('active__catalog_2');
        catalogBtn[2].classList.toggle('active__catalog_3');
        toggleLayoutStyles();
        if (headerLayoutWrapper && headerLayoutWrapper.current) {
            headerLayoutWrapper.current.classList.toggle('active__layout');
        }
    }

    const scrollAnimatedChangeData = (event: React.MouseEvent<HTMLAnchorElement>) => {
        let target = event.target as HTMLAnchorElement;
        let targetElement;
        if(target.href){
            targetElement = target;
        }else {
            targetElement = target.parentElement as HTMLAnchorElement;
        }
        const slugRef = targetElement.href.split('/')[3]; // Slug
        setSlugRef(slugRef);
    }

    return (
        <Fragment>
            <TopAdvertisingComponent/>
            <MainHeader click={toggleBtnCatalog}/>
            <RetractablePanel headerLayoutWrapper={headerLayoutWrapper} categories={categories} subcategories={subcategories} scrollAnimatedChangeData={scrollAnimatedChangeData} slugRef={slugRef}/>
            <SideHeaderCategories categories={categories}/>
        </Fragment>
    )
}


export default Header
