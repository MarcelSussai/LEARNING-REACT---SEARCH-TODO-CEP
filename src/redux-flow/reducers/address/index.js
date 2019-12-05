
import createReducer from '../create-reducer';
import { FETCHING, SUCCESS } from './actions';

const initialState = {
  address: '',
  city: '',
  code: '',
  district: '',
  state: '',
  status: null,
  isFetching: false
};

const address = createReducer(initialState, {
  [FETCHING]: (state, action) => ({
    ...state,
    isFetching: true
  }),
  [SUCCESS]: (state, action) => ({
    ...action.payload,
    isFetching: false
  })
});

export default address;