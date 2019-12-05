import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux-flow/reducers/todos/action-creators';
import * as FilterActions from '../../redux-flow/reducers/visibility-filter/actions';
import './style.css';

const TodosList = ({ todos, handleToggleTodo, activeFilter }) => (
  <ul className="ul-Todo">
    { getVisibleTodos(todos, activeFilter).map((todo) => (
      <li 
        key={ todo.id } 
        className={ todo.completed ? "completed" : "none"} 
        onClick={ handleToggleTodo(todo.id) }
      >
        {todo.text}
      </li>
    )) }
  </ul>
);

const getVisibleTodos = (todos, activeFilter) => {

  const filterItems = {
    [FilterActions.SHOW_ALL]: todos,
    [FilterActions.SHOW_COMPLETED]: todos.filter((todo) => todo.completed),
    [FilterActions.SHOW_ACTIVE]: todos.filter((todo) => !todo.completed)
  };

  return filterItems[activeFilter];
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleTodo: (id) => (e) => {
    e.preventDefault();
    dispatch(toggleTodo(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);