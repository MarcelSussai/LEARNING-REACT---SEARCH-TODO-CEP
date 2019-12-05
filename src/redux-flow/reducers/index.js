
import todos from './todos';
import visibilityFilter from './visibility-filter';
import address from './address';
import { combineReducers } from 'redux';

export default combineReducers({
  todos,
  visibilityFilter,
  address
});