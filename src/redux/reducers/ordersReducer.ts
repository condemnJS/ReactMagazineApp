import {GET_ORDERS_WTIH_SUBSUBCATEGORIES_BY_SLUG} from "../types";

interface initStateI {
    orders_categories: Array<object>
}

interface ordersAction {
    type: string,
    orders_categories: Array<object>,
    body: any
}

const initialState: initStateI = {
    orders_categories: []
}

const ordersReducer = (state = initialState, action: ordersAction): initStateI => {
    switch (action.type) {
        case GET_ORDERS_WTIH_SUBSUBCATEGORIES_BY_SLUG:
            return {...state, orders_categories: action.orders_categories}
    }
    return state;
}

export default ordersReducer

