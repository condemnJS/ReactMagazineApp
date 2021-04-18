import {put, call, takeEvery} from 'redux-saga/effects'
import {requestAuth} from "../Api";
import { FETCH_AUTH_USER, SET_TOKEN} from '../types';
import {SET_ERRORS} from "../types";
import {userDataI} from "../Api";

interface DataProps {
    type: string,
    params: any
}

function* userWorker({params}:DataProps): Generator {
    try {
        const data: any = yield call(requestAuth, params)
        yield put({type: SET_TOKEN, token: data.data.body.token})
    } catch(e) {
        if(e.response.status === 422) {
            yield put({type: SET_ERRORS, errors: e.response.data})
        }
        if(e.response.status === 403) {
            yield put({type: SET_ERRORS, errors: e.response.data})
        }
    }
}


export function* userWatcher() {
    yield takeEvery(FETCH_AUTH_USER, userWorker);
}


