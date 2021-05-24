import {put, call, takeEvery} from 'redux-saga/effects'
import {requestDeleteCategories} from "../../Api";
import {DELETE_CATEGORY, FETCH_DELETE_CATEGORY} from "../../types";

interface limitIProps
{
    id: string, // Параметры передачи с компонента
    type: string
}

function* deleteCategoryWorker({id}: limitIProps): Generator {
    try {
        const data: any = yield call(requestDeleteCategories, id);
        // yield put({type: DELETE_CATEGORY, categories: data.data.data})
    } catch (error) {
        console.log(error)
    }
}

export function* deleteCategoryWatcher() {
    yield takeEvery(FETCH_DELETE_CATEGORY, deleteCategoryWorker)
}