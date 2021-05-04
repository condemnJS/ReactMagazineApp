import {put, call, takeEvery} from 'redux-saga/effects'
import {FETCH_CREATE_ORDER, CREATE_ORDER, DataProps, SET_ERRORS} from "../types";
import {requestCreateOrder} from "../Api";


function* createOrderWorker({params}:DataProps): Generator {
    try {
        const data: any = yield call(requestCreateOrder, params);
        yield put({type: CREATE_ORDER, data: data.data})
    } catch (e) {
        if(e.response.status === 422) {
            yield put({type: SET_ERRORS, errors: e.response.data})
        }
    }
}

export function* createOrderWatcher() {
    yield takeEvery(FETCH_CREATE_ORDER, createOrderWorker)
}
