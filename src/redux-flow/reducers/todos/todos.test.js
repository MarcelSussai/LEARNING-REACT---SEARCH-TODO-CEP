'use strict';

import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import todos from './index';
import { ADD_TODO, TOGGLE_TODO } from './actions';

it('add a todo item', () => {
  const before = deepFreeze([]);
  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 0, text: 'texto qualquer' }
  });
  const after = [{
    id: 0,
    text: 'texto qualquer',
    completed: false
  }];
  expect(todos(before, action)).to.be.deep.equal(after);
});

it('add a new todo item', () => {
  const before = deepFreeze([
    { id: 0, text: 'texto qualquer', completed: false}
  ]);
  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 1, text: 'outro texto qualquer' }
  });
  const after = [
    { id: 0, text: 'texto qualquer', completed: false },
    { id: 1, text: 'outro texto qualquer', completed: false }
  ];
  expect(todos(before, action)).to.be.deep.equal(after);
});

it('toggle first todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'texto qualquer', completed: false},
    { id: 1, text: 'outro texto qualquer', completed: false }
  ]);
  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: { id: 0 }
  });
  const after = [
    { id: 0, text: 'texto qualquer', completed: true},
    { id: 1, text: 'outro texto qualquer', completed: false }
  ];
  expect(todos(before, action)).to.be.deep.equal(after);
});

it('toggle second todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'texto qualquer', completed: false},
    { id: 1, text: 'outro texto qualquer', completed: false }
  ]);
  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: { id: 1 }
  });
  const after = [
    { id: 0, text: 'texto qualquer', completed: false},
    { id: 1, text: 'outro texto qualquer', completed: true }
  ];
  expect(todos(before, action)).to.be.deep.equal(after);
});
