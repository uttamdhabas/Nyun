import axios from 'axios';

export function createEvent(url) {
  return dispatch => {
    return axios.post('/api/v1/url', {target:url.target});
  };
}
