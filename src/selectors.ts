// import {createSelector} from 'reselect';

export const getResults = (state) => {
    console.log('getResults triggered');
    return state.results || 'test'
};