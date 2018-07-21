import axios from 'axios';

const BASE_URL = 'http://localhost:3030/tracks';

export const getTracksWithPagination = (currentPage, filters, sorting, showPerPage) => {
  return axios.get(BASE_URL, {params: {
      _limit: showPerPage
  }})
};