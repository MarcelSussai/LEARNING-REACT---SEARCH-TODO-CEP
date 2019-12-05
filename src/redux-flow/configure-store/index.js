
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';

export default ({ initialState } = {}) => {
  const enhancer = compose(applyMiddleware(thunk),logger());
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
};

// isso é para o redux devtools:
const logger = () => (
  window.__REDUX_DEVTOOLS_EXTENSION__ 
  ? window.__REDUX_DEVTOOLS_EXTENSION__() 
  : (x) => x
);

// ________________________________________________________________
// SEM O REDUX THUNK USA ESSE: QUE É UMA FORMA DE FAZER UM THUNK
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if (typeof action === 'function') {
//     return action(dispatch);
//   }
//   return next(action);
// };
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
