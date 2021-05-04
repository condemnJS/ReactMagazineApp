import {put, call, takeEvery} from 'redux-saga/effects'
import {SET_ERRORS, SUBSUBCATEGORY_CREATE, SUBSUBCATEGORY_CREATE_FETCH, DataProps} from "../types";
import {requestSubSubCategoryCreate} from "../Api";


function* subSubCategoryCreateWorker({params}: DataProps): Generator {
    try {
        const data: any = yield call(requestSubSubCategoryCreate, params);
        yield put({type: SUBSUBCATEGORY_CREATE, data: data.data})
    } catch (e) {
        if(e.response.status === 422) {
            yield put({type: SET_ERRORS, errors: e.response.data})
        }
    }
}

export function* subSubCategoryCreateWatcher() {
    yield takeEvery(SUBSUBCATEGORY_CREATE_FETCH, subSubCategoryCreateWorker)
}