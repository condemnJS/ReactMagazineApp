import {put, call, takeEvery} from 'redux-saga/effects'
import {requestDeleteSubCategories} from "../../Api";
import {FETCH_DELETE_SUBCATEGORY} from "../../types";

interface limitIProps
{
    id: string, // Параметры передачи с компонента
    type: string
}

function* deleteSubCategoryWorker({id}: limitIProps): Generator {
    try {
        const data: any = yield call(requestDeleteSubCategories, id);
    } catch (error) {
        console.log(error)
    }
}

export function* deleteSubCategoryWatcher() {
    yield takeEvery(FETCH_DELETE_SUBCATEGORY, deleteSubCategoryWorker)
}