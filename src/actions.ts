export const setNewResults = (results) => {
    console.log('set new results triggered', results);
    return {
        type: 'SET_RESULTS',
        payload: results
    }
};
