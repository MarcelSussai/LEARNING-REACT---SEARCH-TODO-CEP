import React from 'react';
// import logo from './logo.svg';
import './styles.css';

import Filter from '../filter';
import Form from '../form';
import TodosList from '../todos-list';

const Todo = () => (
  <article className="article-todo">
    <Form />
    <TodosList />
    <Filter />
  </article>
);

export default Todo;