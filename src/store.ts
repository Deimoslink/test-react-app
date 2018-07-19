import {createStore, combineReducers} from 'redux';

const defaultState = {
    filters: 'default',
    showPerPage: 'default'
};

const reducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case 'SET_FILTER':
            state = {
                ...state,
                filters: action.payload
            };
            break;
        case 'SET_SHOW_PER_PAGE':
            state = {
                ...state,
                showPerPage: action.payload
            };
            break;
        case 'SET_SORTING':
            state = {
                ...state,
                ssorting: action.payload
            };
            break;
    }
    return state;
};

const store = createStore(combineReducers({reducer}));

export default store;
