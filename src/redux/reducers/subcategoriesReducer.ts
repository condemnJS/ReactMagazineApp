import {GET_SUB_CATEGORIES} from "../types";

interface initStateI {
    subcategories: Array<object>
}

interface subcategoriesAction {
    type: string,
    subcategories: Array<object>
}

const initialState: initStateI = {
    subcategories: []
}

const subcategoriesReducer = (state = initialState, action: subcategoriesAction): initStateI => {
    switch (action.type) {
        case GET_SUB_CATEGORIES:
            return {...state, subcategories: action.subcategories}
    }
    return state;
}

export default subcategoriesReducer
