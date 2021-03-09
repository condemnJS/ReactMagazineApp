import {GET_SUB_CATEGORIES} from "../types";
import {FETCH_GET_SUB_CATEGORIES} from "../types";
import {put, call, takeEvery} from 'redux-saga/effects';
import {requestGetSubCategories} from "../Api";

function* subcategoriesWorker(): Generator {
    try {
        const data: any = yield call(requestGetSubCategories);
        yield put({type: GET_SUB_CATEGORIES, subcategories: data.data})
    } catch(error) {
        console.log(error);
    }
}

export function* subcategoriesWatcher() {
    yield takeEvery(FETCH_GET_SUB_CATEGORIES, subcategoriesWorker)
}
