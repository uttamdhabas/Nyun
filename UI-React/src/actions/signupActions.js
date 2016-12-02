import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/auth/register', {email:userData.email,password:userData.password,
      confirmPassword:userData.confirmPassword});
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return axios.get(`/api/v1/auth/check/${identifier}`);
  }
}
