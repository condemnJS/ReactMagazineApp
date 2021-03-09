import {put, call, takeEvery} from 'redux-saga/effects'
import {GET_CATEGORIES} from "../types";
import {FETCH_GET_CATEGORIES} from "../types";
import {requestGetCategories} from "../Api";

interface limitIProps
{
    limit: number, // Параметры передачи с компонента
    type: string
}

function* categoriesWorker({limit}: limitIProps): Generator {
    try {
        const data: any = yield call(requestGetCategories, limit);
        yield put({type: GET_CATEGORIES, categories: data.data.data})
    } catch (error) {
        console.log(error)
    }
}

export function* categoriesWatcher() {
    yield takeEvery(FETCH_GET_CATEGORIES, categoriesWorker)
}
