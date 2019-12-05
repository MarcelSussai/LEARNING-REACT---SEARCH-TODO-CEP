import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Todo from './components/todo';
import SearchCep from './components/search-cep';
import configureStore from './redux-flow/configure-store';

const store = configureStore();
// ________________________________________________________________
// store.dispatch(lazyAction());
// function lazyAction () {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch({
//         type: 'todos:ADD_TODO',
//         payload: {
//           text: 'Lazy Action',
//           id: '123',
//           completed: false
//         }
//       });
//     }, 3000);
//   }
// };
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

store.dispatch((dispatch, getState) => {
  console.log('async dispatch', dispatch, getState) ;
});

const App = () => {
  return (
    <section className="App">
      <Provider store={ store }>
        <Todo />
        <SearchCep />
      </Provider>
    </section>
  );
}

export default App;