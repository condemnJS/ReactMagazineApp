// ------ Глобальный наблюдатель ------ //
import {all} from 'redux-saga/effects';
import {categoriesWatcher} from "./categoriesSaga";
import {subcategoriesWatcher} from "./subcategoriesSaga";
import {categoryWatcher} from "./specificCategorySaga";
import {userWatcher} from "./usersSaga";
import { registerWatcher } from './registerSaga';
import { categoryCreateWatcher } from './categoryCreateSaga';
import { subCategoryCreateWatcher } from './subCategoryCreateSaga';
import { subsCategoriesWatcher } from './subsCategoriesSaga';
import { subSubCategoryCreateWatcher } from './subSubCategoryCreateSaga';
import { subsSubsCategoriesWatcher } from './subSubCategoriesSaga';
import { getBySlugSunCategoriesWatcher } from './getBySlugSubCategories';
import { createOrderWatcher } from './createOrderSaga';
import { ordersCategoriesWatcher } from './ordersSaga';
import {deleteCategoryWatcher} from "./categories/delete";
import {deleteSubCategoryWatcher} from "./subcaregories/delete";
import {deleteSubSubCategoryWatcher} from "./subsubcategories/delete";

export function* rootWatcher() {
    yield all([
        categoriesWatcher(),
        subcategoriesWatcher(),
        subsCategoriesWatcher(),
        categoryWatcher(),
        userWatcher(),
        registerWatcher(),
        categoryCreateWatcher(),
        subCategoryCreateWatcher(),
        subSubCategoryCreateWatcher(),
        subsSubsCategoriesWatcher(),
        getBySlugSunCategoriesWatcher(),
        createOrderWatcher(),
        ordersCategoriesWatcher(),
        deleteCategoryWatcher(),
        deleteSubCategoryWatcher(),
        deleteSubSubCategoryWatcher()
    ]);
}
