import React, {useState, useEffect, Fragment} from 'react'
// import {useFetch} from "../hooks/useFetch";
import {AdvertisingHeader} from '../layoutsComponents/AdvertisingHeader';
import {Head} from '../layoutsComponents/Head';
import {NavBar} from '../layoutsComponents/NavBar';

export const Header = () => {
    // const [category, setCategory] = useState([]);
    // const {request} = useFetch();
    // useEffect(async ()=>{
    //     const data = await request('http://magazine.test/api/categories');
    //     console.log('setCategory')
    //     setCategory(data)
    // }, []);
    // console.log(category)
    return (
        <Fragment>
            <AdvertisingHeader />
            <Head />
            <NavBar />
        </Fragment>
    )
}


