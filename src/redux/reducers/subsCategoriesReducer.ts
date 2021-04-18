import {GET_SUBS_CATEGORIES} from "../types";

interface initStateI {
    subscategories: Array<object>
}

interface subcategoriesAction {
    type: string,
    subscategories: Array<object>
}

const initialState: initStateI = {
    subscategories: []
}

const subsCategoriesReducer = (state = initialState, action: subcategoriesAction): initStateI => {
    switch (action.type) {
        case GET_SUBS_CATEGORIES:
            return {...state, subscategories: action.subscategories}
    }
    return state;
}

export default subsCategoriesReducer
