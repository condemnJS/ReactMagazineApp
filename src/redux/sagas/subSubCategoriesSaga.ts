import {FETCH_GET_SUB_SUBS_CATEGORIES, GET_SUB_SUBS_CATEGORIES} from "../types";
import {put, call, takeEvery} from 'redux-saga/effects';
import { requestGetSubsSubsCategories } from "../Api";

function* subsSubsCategoriesWorker(): Generator {
    try {
        const data: any = yield call(requestGetSubsSubsCategories);
        yield put({type: GET_SUB_SUBS_CATEGORIES, subssubcategories: data.data.data})
    } catch(error) {
        console.log(error);
    }
}

export function* subsSubsCategoriesWatcher() {
    yield takeEvery(FETCH_GET_SUB_SUBS_CATEGORIES, subsSubsCategoriesWorker)
}
