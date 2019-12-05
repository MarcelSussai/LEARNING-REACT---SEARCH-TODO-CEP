import { SHOW_ALL, SET_VISIBILITY_FILTER } from './actions';
import createReducer from '../create-reducer';

const initialState = SHOW_ALL;

const visibilityFilter = createReducer(initialState, {
  [SET_VISIBILITY_FILTER]: (state, action) => action.payload.filter
});

export default visibilityFilter;