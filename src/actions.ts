import {getTracksWithPagination} from "./api.service";

export const setNewResults = () => {
    return (dispatch) => {
        getTracksWithPagination().then(res => {
            dispatch({
                type: 'SET_RESULTS',
                payload: res.data
            })
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