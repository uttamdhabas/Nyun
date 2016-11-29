import axios from 'axios';

export function createEvent(event) {
  return dispatch => {
    return axios.post('/api/v1/url', event);
  };
}
