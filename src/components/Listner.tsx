import React, {Fragment, useEffect} from 'react';
import { useHistory } from 'react-router';
import {useDispatch} from "react-redux";
import {CLEAN_ERRORS, CLEAN_SUBCATEGORY, CLEAN_CATEGORY, CLEAN_SUBSUBCATEGORY} from "../redux/types";

export const Listner:React.FC = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    history.listen((location) => {
        dispatch({type: CLEAN_ERRORS});
        dispatch({type: CLEAN_SUBCATEGORY});
        dispatch({type: CLEAN_CATEGORY});
        dispatch({type: CLEAN_SUBSUBCATEGORY});
    });
    return (
        <Fragment>
            {props.children}
        </Fragment>    
    );
}