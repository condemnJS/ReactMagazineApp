// ------ Глобальный наблюдатель ------ //
import {all} from 'redux-saga/effects';
import {categoriesWatcher} from "./categoriesSaga";
import {subcategoriesWatcher} from "./subcategoriesSaga";

export function* rootWatcher() {
    yield all([
        categoriesWatcher(),
        subcategoriesWatcher()
    ]);
}
