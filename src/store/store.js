import { createStore, applyMiddleware, compose  } from "redux";
import ReduxThunk from 'redux-thunk';

import allReducers from './reducers/index';

let middleware = [ReduxThunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(allReducers, composeEnhancers(applyMiddleware(...middleware)));