import {put, call, takeEvery} from 'redux-saga/effects'
import {SET_ERRORS, SUBCATEGORY_CREATE, SUBCATEGORY_CREATE_FETCH} from "../types";
import {requestSubCategoryCreate} from "../Api";

interface DataProps {
    type: string,
    params: any
}

function* subCategoryCreateWorker({params}: DataProps): Generator {
    try {
        const data: any = yield call(requestSubCategoryCreate, params);
        yield put({type: SUBCATEGORY_CREATE, data: data.data})
    } catch (e) {
        if(e.response.status === 422) {
            yield put({type: SET_ERRORS, errors: e.response.data})
        }
    }
}

export function* subCategoryCreateWatcher() {
    yield takeEvery(SUBCATEGORY_CREATE_FETCH, subCategoryCreateWorker)
}