import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {Header} from '../components/Header';
export const Home = ()=>{
    let location = useLocation()
    console.log(location);
    return (
        <React.Fragment>
            {/*<Header />*/}
            <h1>Home page</h1>
        </React.Fragment>
    );
}