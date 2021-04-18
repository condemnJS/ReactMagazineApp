import {errorsBody, SET_ERRORS, CLEAN_ERRORS, is_created, SUBCATEGORY_CREATE, CLEAN_SUBCATEGORY} from "../types"

interface errorsBodyProps {
    image: string,
    title: string,
    category_id: number
}

interface errorsBodyChild extends errorsBody{
    body?: errorsBodyProps
}

interface initStateI {
    errors: errorsBodyChild,
    is_created_subcategory: is_created | null
}

interface Action {
    type: string,
    errors: errorsBodyChild,
    data: is_created
}

const initialState: initStateI = {
    errors: {},
    is_created_subcategory: null
}

const subCategoryCreateReducer = (state = initialState, action: Action): initStateI => {
    switch (action.type) {
        case SET_ERRORS: 
            return {...state, errors: action.errors}
        case CLEAN_ERRORS: 
            return {...state, errors: {}} 
        case SUBCATEGORY_CREATE:
            return {...state, is_created_subcategory: action.data}  
        case CLEAN_SUBCATEGORY: 
            return {...state, is_created_subcategory: null}        
    }
    return state;
}

export default subCategoryCreateReducer