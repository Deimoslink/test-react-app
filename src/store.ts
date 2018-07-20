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
    filters: {
        artist: '',
        track: ''
    },
    paginatorState: {
        totalPages: 1,
        currentPage: 1
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

const paginatorStateReducer = (state = defaultState.paginatorState, action) => {
    if (action.type === 'SET_PAGINATOR_STATE') {
        console.log(state, action.payload);
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
    paginatorState: paginatorStateReducer
};

const middlewares = applyMiddleware(thunk, createLogger({collapsed: false}));
const store = createStore(combineReducers({...reducer}), compose(middlewares));

export default store;
