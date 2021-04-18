import {FETCH_GET_SUBS_CATEGORIES, GET_SUBS_CATEGORIES} from "../types";
import {put, call, takeEvery} from 'redux-saga/effects';
import { requestGetSubsCategories } from "../Api";

function* subsCategoriesWorker(): Generator {
    try {
        const data: any = yield call(requestGetSubsCategories);
        yield put({type: GET_SUBS_CATEGORIES, subscategories: data.data.data})
    } catch(error) {
        console.log(error);
    }
}

export function* subsCategoriesWatcher() {
    yield takeEvery(FETCH_GET_SUBS_CATEGORIES, subsCategoriesWorker)
}
