import {combineReducers} from "redux";
import subcategoriesReducer from "./subcategoriesReducer";
import categoriesReducer from "./categoriesReducer";
import categoryReducer from "./specificCategoryReducer";
import userReducer from "./userReducer";
import categoryCreateReducer from "./categoryCreateReducer";
import subCategoryCreateReducer from "./subCategoryCreateReducer";
import subsCategoriesReducer from "./subsCategoriesReducer";
import subSubCategoryCreateReducer from "./subSubCategoryReducer";
import subsSubsCategoriesReducer from "./subsSubsCategoriesReducer";
import createOrderReducer from "./createOrderReducer";

export const RootReducer = combineReducers({
    categories: categoriesReducer,
    subcategories: subcategoriesReducer,
    subscategories: subsCategoriesReducer,
    subssubcategories: subsSubsCategoriesReducer,
    category: categoryReducer,
    errors: userReducer,
    user_id: userReducer,
    token: userReducer,
    is_created_category: categoryCreateReducer,
    is_created_subcategory: subCategoryCreateReducer,
    is_created_subsubcategory: subSubCategoryCreateReducer,
    is_created_order: createOrderReducer
})

// Вывод state, с помощью ReturnType, чтобы не приходилсь писать отдельный интерфейс
export type RootState = ReturnType<typeof RootReducer>
