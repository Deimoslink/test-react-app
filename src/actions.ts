import store from "./store";
import {getTracksWithPagination} from "./api.service";

export const setNewResults = () => {
    getTracksWithPagination().then(res => {
        store.dispatch({
            type: 'SET_RESULTS',
            payload: res.data
        })
    })
};

export const setNewShowPerPage = (option) => {
    store.dispatch({
        type: 'SET_SHOW_PER_PAGE',
        payload: option
    })
};
