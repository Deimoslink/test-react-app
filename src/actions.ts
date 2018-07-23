import {getTracksWithPagination} from './api.service';

export const setNewResults = () => {
    return (dispatch, getState) => {
        const {currentPage, filters, sorting, showPerPage} = getState();
        getTracksWithPagination(currentPage, filters, sorting, showPerPage).then(res => {
            dispatch({
                type: 'SET_RESULTS',
                payload: {
                    content: res.data,
                    total: parseInt(res.headers['x-total-count'], 10)
                }
            });
        })
    }
};

export const setNewShowPerPage = (option) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_CURRENT_PAGE',
            payload: 1
        });
        dispatch({
            type: 'SET_SHOW_PER_PAGE',
            payload: option
        });
        dispatch(setNewResults());
    }
};

export const setSorting = (sorting) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_CURRENT_PAGE',
            payload: 1
        });
        dispatch({
            type: 'SET_SORTING',
            payload: {
                field: sorting.field,
                direction: sorting.direction
            }
        });
        dispatch(setNewResults());
    }
};

export const setFilters = (filter) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_CURRENT_PAGE',
            payload: 1
        });
        dispatch({
            type: 'SET_FILTERS',
            payload: {
                artist: filter.artist,
                name: filter.name
            },
        });
        dispatch(setNewResults());
    }
};

export const setCurrentPage = (newCurrentPage) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_CURRENT_PAGE',
            payload: newCurrentPage
        });
        dispatch(setNewResults());
    }
};
