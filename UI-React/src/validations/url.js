import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  

  if (!Validator.isURL(data.target)) {
    errors.target = 'Please enter vaild URL';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}