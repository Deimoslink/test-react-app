import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = applyMiddleware(thunk, createLogger({collapsed: true}));
const store = createStore(combineReducers({...reducer}), compose(middlewares));

export default store;
