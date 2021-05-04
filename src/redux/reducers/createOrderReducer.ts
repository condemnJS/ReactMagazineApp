import {errorsBody, SET_ERRORS, CLEAN_ERRORS, is_created, CREATE_ORDER, CLEAN_ORDER} from "../types"

interface errorsBodyProps {
    images: string,
    title: string,
    price: string,
    description: string,
    subsubcategory_id: number
}

interface errorsBodyChild extends errorsBody{
    body?: errorsBodyProps
}

interface initStateI {
    errors: errorsBodyChild,
    is_created_order: is_created | null
}

interface Action {
    type: string,
    errors: errorsBodyChild,
    data: is_created
}

const initialState: initStateI = {
    errors: {},
    is_created_order: null
}

const createOrderReducer = (state = initialState, action: Action): initStateI => {
    switch (action.type) {
        case SET_ERRORS: 
            return {...state, errors: action.errors}
        case CLEAN_ERRORS: 
            return {...state, errors: {}} 
        case CREATE_ORDER:
            return {...state, is_created_order: action.data}   
        case CLEAN_ORDER: 
            return {...state, is_created_order: null} 
    }
    return state;
}

export default createOrderReducer