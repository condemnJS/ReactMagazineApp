import {FETCH_GET_SUBCATEGORIES_BY_SLUG, GET_SUBCATEGORIES_BY_SLUG, GET_SUBS_CATEGORIES} from "../types";
import {put, call, takeEvery} from 'redux-saga/effects';
import { requestGetSubCategoryBySlug } from "../Api";

interface slugIProps {
    slug: string,
    type: string
}

function* getBySlugSunCategoriesWorker({slug}: slugIProps): Generator {
    try {
        const data: any = yield call(requestGetSubCategoryBySlug, slug);
        yield put({type: GET_SUBS_CATEGORIES, subscategories: data.data.data})
    } catch(error) {
        console.log(error);
    }
}

export function* getBySlugSunCategoriesWatcher() {
    yield takeEvery(FETCH_GET_SUBCATEGORIES_BY_SLUG, getBySlugSunCategoriesWorker)
}
