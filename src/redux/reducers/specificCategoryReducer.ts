import {GET_CATEGORY} from "../types";
import {BaseCategoryPropsI} from "../types";

interface subcategoryItemPropsI extends BaseCategoryPropsI {
    subsubcategory: Array<BaseCategoryPropsI>
}


interface categoryItemPropsI extends BaseCategoryPropsI {
    subCategories: Array<subcategoryItemPropsI>
    subsubcategory: Array<BaseCategoryPropsI>
}

interface initStateI {
    category: categoryItemPropsI
}

interface categoryAction {
    type: string,
    category: categoryItemPropsI
}

const initialState: initStateI = {
    category: {
        id: -1,
        title: '',
        slug: '',
        subCategories: [],
        subsubcategory: []
    }
}

const subCategoryReducer = (state = initialState, action: categoryAction) : initStateI => {
    switch (action.type) {
        case GET_CATEGORY:
            return {...state, category: action.category}
    }
    return state;
}

export default subCategoryReducer;
