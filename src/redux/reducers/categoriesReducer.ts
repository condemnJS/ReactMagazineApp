import {GET_CATEGORIES} from "../types";

interface initStateI {
    categories: Array<object>
}

interface categoriesAction {
    type: string,
    categories: Array<object>,
}

const initialState: initStateI = {
    categories: []
}

const categoriesReducer = (state = initialState, action: categoriesAction): initStateI => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {...state, categories: action.categories}
    }
    return state;
}

export default categoriesReducer

