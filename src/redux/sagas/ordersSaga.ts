import {FETCH_GET_ORDERS_WTIH_SUBSUBCATEGORIES_BY_SLUG, GET_ORDERS_WTIH_SUBSUBCATEGORIES_BY_SLUG,} from "../types";
import {put, call, takeEvery} from 'redux-saga/effects';
import { requestGetOrdersWithSubSubCategory } from "../Api";

interface slugIProps {
    slug: string,
    type: string
}

function* ordersCategoriesWorker ({slug}: slugIProps): Generator {
    try {
        const data: any = yield call(requestGetOrdersWithSubSubCategory, slug);
        yield put({type: GET_ORDERS_WTIH_SUBSUBCATEGORIES_BY_SLUG, orders_categories: data.data.body})
    } catch(error) {
        console.log(error);
    }
}

export function* ordersCategoriesWatcher() {
    yield takeEvery(FETCH_GET_ORDERS_WTIH_SUBSUBCATEGORIES_BY_SLUG, ordersCategoriesWorker)
}
