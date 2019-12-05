import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import { 
  SET_VISIBILITY_FILTER, 
  SHOW_ALL, 
  SHOW_ACTIVE, 
  SHOW_COMPLETED } from './actions';
import visibilityFilter from './index';

it('show all todos', () => {
  const before = SHOW_COMPLETED;
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ALL }
  });
  const after = SHOW_ALL;

  expect(visibilityFilter(before,action)).to.be.equal(after);
});

it('show just completed todos', () => {
  const before = SHOW_ALL;
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_COMPLETED }
  });
  const after = SHOW_COMPLETED;

  expect(visibilityFilter(before,action)).to.be.equal(after);
});

it('show just active todos', () => {
  const before = SHOW_ALL;
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ACTIVE }
  });
  const after = SHOW_ACTIVE;

  expect(visibilityFilter(before,action)).to.be.equal(after);
});

it('return latest state when action is unknown', () => {
  const before = SHOW_COMPLETED;
  const action = deepFreeze({
    type: 'UNKNOWN',
    payload: { filter: SHOW_ALL }
  });
  const after = SHOW_COMPLETED;

  expect(visibilityFilter(before,action)).to.be.equal(after);
});

