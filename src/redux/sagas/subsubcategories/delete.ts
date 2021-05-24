import {put, call, takeEvery} from 'redux-saga/effects'
import {requestDeleteSubSubCategories} from "../../Api";
import {FETCH_DELETE_SUBSUBCATEGORY} from "../../types";

interface limitIProps
{
    id: string, // Параметры передачи с компонента
    type: string
}

function* deleteSubSubCategoryWorker({id}: limitIProps): Generator {
    try {
        const data: any = yield call(requestDeleteSubSubCategories, id);
    } catch (error) {
        console.log(error)
    }
}

export function* deleteSubSubCategoryWatcher() {
    yield takeEvery(FETCH_DELETE_SUBSUBCATEGORY, deleteSubSubCategoryWorker)
}