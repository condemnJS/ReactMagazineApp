import {errorsBody, SET_ERRORS, CLEAN_ERRORS, CATEGORY_CREATE, is_created, CLEAN_CATEGORY} from "../types"

interface errorsBodyProps {
    image: string,
    title: string
}

interface errorsBodyChild extends errorsBody{
    body?: errorsBodyProps
}

interface initStateI {
    errors: errorsBodyChild,
    is_created_category: is_created | null
}

interface Action {
    type: string,
    errors: errorsBodyChild,
    data: is_created
}

const initialState: initStateI = {
    errors: {},
    is_created_category: null
}

const categoryCreateReducer = (state = initialState, action: Action): initStateI => {
    switch (action.type) {
        case SET_ERRORS: 
            return {...state, errors: action.errors}
        case CLEAN_ERRORS: 
            return {...state, errors: {}} 
        case CATEGORY_CREATE:
            return {...state, is_created_category: action.data}
        case CLEAN_CATEGORY: 
            return {...state, is_created_category: null}         
    }
    return state;
}

export default categoryCreateReducer