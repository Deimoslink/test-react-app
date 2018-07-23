import {DEFAULT_STATE} from './constants';

const getReducers = (defaultState = DEFAULT_STATE) => {
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

    return {
        filters: filtersReducer,
        sorting: sortingReducer,
        showPerPage: showPerPageReducer,
        results: resultsReducer,
        currentPage: currentPageReducer
    };

};

export default getReducers;