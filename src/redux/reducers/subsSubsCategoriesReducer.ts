import {GET_SUB_SUBS_CATEGORIES} from "../types";

interface initStateI {
    subssubcategories: Array<object>
}

interface subSubcategoriesAction {
    type: string,
    subssubcategories: Array<object>
}

const initialState: initStateI = {
    subssubcategories: []
}

const subsSubsCategoriesReducer = (state = initialState, action: subSubcategoriesAction): initStateI => {
    switch (action.type) {
        case GET_SUB_SUBS_CATEGORIES:
            return {...state, subssubcategories: action.subssubcategories}
    }
    return state;
}

export default subsSubsCategoriesReducer
