import {put, call, takeEvery} from 'redux-saga/effects'
import {GET_CATEGORY, FETCH_GET_CATEGORY} from "../types";
import {requestGetCategory} from "../Api";

interface slugIProps {
    slug: string,
    type: string
}

function* categoryWorker({slug}: slugIProps): Generator {
    try {
        const data: any = yield call(requestGetCategory, slug)
        yield put({type: GET_CATEGORY, category: data.data})
    } catch (e) {
        console.log(e);
    }
}

export function* categoryWatcher() {
    yield takeEvery(FETCH_GET_CATEGORY, categoryWorker);
}
