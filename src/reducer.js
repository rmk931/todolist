import { combineReducers } from 'redux';
import { todos, filter } from './ducks/todo/reducer';

const todoApp = combineReducers({
  todos,
  filter
});

export default todoApp;