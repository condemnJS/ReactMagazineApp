import {put, call, takeEvery} from 'redux-saga/effects'
import {CATEGORY_CREATE, CATEGORY_CREATE_FETCH, SET_ERRORS, DataProps} from "../types";
import {requestCategoryCreate} from "../Api";


function* categoryCreateWorker({params}: DataProps): Generator {
    try {
        const data: any = yield call(requestCategoryCreate, params);
        yield put({type: CATEGORY_CREATE, data: data.data})
    } catch (e) {
        if(e.response.status === 422) {
            yield put({type: SET_ERRORS, errors: e.response.data})
        }
    }
}

export function* categoryCreateWatcher() {
    yield takeEvery(CATEGORY_CREATE_FETCH, categoryCreateWorker)
}