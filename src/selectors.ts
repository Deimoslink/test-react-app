export const getResults = (state) => {
    return state.results;
};

export const getShowPerPage = (state) => {
    return state.showPerPage;
};

export const getSorting = (state) => {
    return state.sorting;
};

export const getFilters = (state) => {
    return state.filters;
};

export const getPagination = (state) => {
    return {
        currentPage: state.currentPage,
        totalPages: Math.ceil(state.results.total / state.showPerPage)
    }
};
