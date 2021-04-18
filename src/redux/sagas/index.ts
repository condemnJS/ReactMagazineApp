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
        subSubCategoryCreateWatcher()
    ]);
}
