import {combineReducers} from "redux";
import subcategoriesReducer from "./subcategoriesReducer";
import categoriesReducer from "./categoriesReducer";

export const RootReducer = combineReducers({
    categories: categoriesReducer,
    subcategories: subcategoriesReducer,
})

// Вывод state, с помощью ReturnType, чтобы не приходилсь писать отдельный интерфейс
export type RootState = ReturnType<typeof RootReducer>
