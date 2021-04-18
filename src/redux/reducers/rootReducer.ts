import {combineReducers} from "redux";
import subcategoriesReducer from "./subcategoriesReducer";
import categoriesReducer from "./categoriesReducer";
import categoryReducer from "./specificCategoryReducer";
import userReducer from "./userReducer";
import categoryCreateReducer from "./categoryCreateReducer";
import subCategoryCreateReducer from "./subCategoryCreateReducer";
import subsCategoriesReducer from "./subsCategoriesReducer";
import subSubCategoryCreateReducer from "./subSubCategoryReducer";

export const RootReducer = combineReducers({
    categories: categoriesReducer,
    subcategories: subcategoriesReducer,
    subscategories: subsCategoriesReducer,
    category: categoryReducer,
    errors: userReducer,
    user_id: userReducer,
    token: userReducer,
    is_created_category: categoryCreateReducer,
    is_created_subcategory: subCategoryCreateReducer,
    is_created_subsubcategory: subSubCategoryCreateReducer
})

// Вывод state, с помощью ReturnType, чтобы не приходилсь писать отдельный интерфейс
export type RootState = ReturnType<typeof RootReducer>
