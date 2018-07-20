import {getTracksWithPagination} from "./api.service";

export const setNewResults = () => {
    return (dispatch) => {
        getTracksWithPagination().then(res => {
            console.log(res.headers['x-total-count']);
            dispatch({
                type: 'SET_RESULTS',
                payload: {
                    content: res.data,
                    total: res.headers['x-total-count']
                }
            });
        })
    }
};

export const setNewShowPerPage = (option) => {
    return {
        type: 'SET_SHOW_PER_PAGE',
        payload: option
    }
};

export const setSorting = (sorting) => {
    return {
        type: 'SET_SORTING',
        payload: {
            field: sorting.field,
            direction: sorting.direction
        }
    }
};

export const setFilters = (filter) => {
    return {
        type: 'SET_FILTERS',
        payload: {
            artist: filter.artist,
            track: filter.track
        },
    }
};