import { combineReducers } from 'redux';
import todoList from './todoListReducer';
import todo from './todoReducer';
import visibilityFilter from './visibilityFiltersReducer';

const rootReducer = combineReducers({
  todoList,
  todo,
  visibilityFilter,
});

export default rootReducer;
