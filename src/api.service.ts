import axios from 'axios';

const BASE_URL = 'http://localhost:3030/tracks';

export const getTracksWithPagination = () => {
  return axios.get(BASE_URL, {params: {
      _limit: 10
  }})
};