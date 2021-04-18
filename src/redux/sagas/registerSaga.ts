import {put, call, takeEvery} from 'redux-saga/effects'
import {REGISTER_USER_FETCH, CREATE_USER} from '../types';
import {SET_ERRORS} from "../types";
import {requestRegister} from "../Api";



interface DataProps {
    type: string,
    params: any
}

function* registerWorker({params}:DataProps): Generator {
    try {
        const data: any = yield call(requestRegister, params)
        yield put({type: CREATE_USER, user_id: data.data.body.user})
    } catch(e) {
        console.log(e)
        if(e.response.status === 422) {
            yield put({type: SET_ERRORS, errors: e.response.data})
        }
    }
}


export function* registerWatcher() {
    yield takeEvery(REGISTER_USER_FETCH, registerWorker)
}
