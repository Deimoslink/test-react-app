import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

// const defaultState = {
//     filters: 'default',
//     sorting: 'default',
//     showPerPage: 'default',
//     results: 'default'
// };

const filtersReducer = (state = 'default', action) => {
    if (action.type === 'SET_FILTER') {
        return action.payload;
    }
    return state;
};

const sortingReducer = (state = 'default', action) => {
    if (action.type === 'SET_SORTING') {
        return action.payload;
    }
    return state;
};

const showPerPageReducer = (state = 'default', action) => {
    if (action.type === 'SET_SHOW_PER_PAGE') {
        return action.payload;
    }
    return state;
};

const resultsReducer = (state = 'default', action) => {
    if (action.type === 'SET_RESULTS') {
        return action.payload;
    }
    return state;
};

const reducer = {
    filters: filtersReducer,
    sorting: sortingReducer,
    showPerPage: showPerPageReducer,
    results: resultsReducer
};

/*const { reducer: locationReducer, middleware: locationMiddleware, enhancer } = connectRoutes(history, routesMap);*/

const store = createStore(combineReducers({...reducer}), applyMiddleware(thunk));

export default store;
