import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import getReducers from "./reducers";

const middlewares = applyMiddleware(thunk, createLogger({collapsed: true}));
const store = createStore(combineReducers({...getReducers()}), compose(middlewares));

export default store;
