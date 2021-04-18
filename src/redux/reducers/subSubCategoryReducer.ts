import {errorsBody, SET_ERRORS, CLEAN_ERRORS, is_created, SUBSUBCATEGORY_CREATE, CLEAN_SUBSUBCATEGORY} from "../types"

interface errorsBodyProps {
    image: string,
    title: string,
    subcategory_id: number
}

interface errorsBodyChild extends errorsBody{
    body?: errorsBodyProps
}

interface initStateI {
    errors: errorsBodyChild,
    is_created_subsubcategory: is_created | null
}

interface Action {
    type: string,
    errors: errorsBodyChild,
    data: is_created
}

const initialState: initStateI = {
    errors: {},
    is_created_subsubcategory: null
}

const subSubCategoryCreateReducer = (state = initialState, action: Action): initStateI => {
    switch (action.type) {
        case SET_ERRORS: 
            return {...state, errors: action.errors}
        case CLEAN_ERRORS: 
            return {...state, errors: {}} 
        case SUBSUBCATEGORY_CREATE:
            return {...state, is_created_subsubcategory: action.data}  
        case CLEAN_SUBSUBCATEGORY: 
            return {...state, is_created_subsubcategory: null}        
    }
    return state;
}

export default subSubCategoryCreateReducer