import {applyMiddleware, createStore} from "redux";
import {RootReducer} from "../reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export default Store;
