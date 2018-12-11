import axios from 'axios';

const BASE_URL = 'http://localhost:3030/tracks/';

export const getTracksWithPagination = (currentPage, filters, sorting, showPerPage) => {
    let params: any = {
        _limit: showPerPage,
        _page: currentPage,
        name_like: filters.name,
        artist_like: filters.artist
    };
    if (sorting.field) {
        params = {...params, ...{_sort: sorting.field, _order: sorting.direction}}
    }
  return axios.get(BASE_URL, {params});
};

export const getTrackById = (id) => {
    return axios.get(BASE_URL + id);
};