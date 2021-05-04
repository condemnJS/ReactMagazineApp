import {SET_ERRORS, CREATE_USER, SET_TOKEN, SAVE_TOKEN, CLEAN_ERRORS, errorsBody} from "../types";
import {Store} from "../Store";

interface userToken  {
    token: string | null,
}

interface errorsBodyChild extends errorsBody{
    body?: errorsBodyProps
}

interface initStateI extends userToken{
    errors: errorsBodyChild,
    user_id: number | null,
}

interface userAction extends userToken{
    type: string,
    errors: errorsBodyChild,
    user_id: number | null,
}


interface errorsBodyProps {
    email: string,
    password: string,
    fio: string,
    tel?: string,
    password_confirmation?: string,
    title?: string,
    image?: string,
    category_id?: string,
    description?: string,
    price?: string,
    images?: string,
    subsubcategory_id?: string
}

const initialState: initStateI = {
    errors: {},
    user_id: null,
    token: null,
}

const userReducer = (state = initialState, action: userAction): initStateI => {
    switch (action.type) {
        case SET_ERRORS: 
            return {...state, errors: action.errors}
        case CLEAN_ERRORS: 
            return {...state, errors: {}}    
        case CREATE_USER:
            return {...state, user_id: action.user_id} 
        case SET_TOKEN:
            Store.set('token', action.token);
            return {...state, token: action.token}
        case SAVE_TOKEN: 
            if(localStorage.getItem('token')) {
                return {...state, token: Store.get('token')}  
            }  
    }
    return state;
}

export default userReducer;