import React from 'react';
import {SideBar} from "../components/SideBar";

export const AdminLayout = (props) => {
    return (
        <div className={'admin__wrapper'}>
            <SideBar />
            {props.children}
        </div>
    );
}