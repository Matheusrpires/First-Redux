import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import  allReducers from "../reducers/index";
import mySaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(mySaga);