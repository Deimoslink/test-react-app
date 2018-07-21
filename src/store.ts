import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from "redux-thunk";
import {SHOW_PER_PAGE_OPTIONS} from "./constants";

const defaultState = {
    sorting: {
        field: '',
        direction: ''
    },
    showPerPage: SHOW_PER_PAGE_OPTIONS[0],
    currentPage: 1,
    filters: {
        artist: '',
        track: ''
    },
    results: {
        content: [],
        total: 0
    },
};

const filtersReducer = (state = defaultState.filters, action) => {
    if (action.type === 'SET_FILTERS') {
        return action.payload;
    }
    return state;
};

const sortingReducer = (state = defaultState.sorting, action) => {
    if (action.type === 'SET_SORTING') {
        return action.payload;
    }
    return state;
};

const showPerPageReducer = (state = defaultState.showPerPage, action) => {
    if (action.type === 'SET_SHOW_PER_PAGE') {
        return action.payload;
    }
    return state;
};

const currentPageReducer = (state = defaultState.currentPage, action) => {
    if (action.type === 'SET_CURRENT_PAGE') {
        return action.payload;
    }
    return state;
};

const resultsReducer = (state = defaultState.results, action) => {
    if (action.type === 'SET_RESULTS') {
        return action.payload;
    }
    return state;
};

const reducer = {
    filters: filtersReducer,
    sorting: sortingReducer,
    showPerPage: showPerPageReducer,
    results: resultsReducer,
    currentPage: currentPageReducer
};

const middlewares = applyMiddleware(thunk, createLogger({collapsed: false}));
const store = createStore(combineReducers({...reducer}), compose(middlewares));

export default store;
