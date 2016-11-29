import { combineReducers } from 'redux';
import todos from './reducers/url/todos'
import visibilityFilter from './reducers/url/visibilityFilter'
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';

export default combineReducers({
  flashMessages,
  auth,
  todos,
  visibilityFilter

});
