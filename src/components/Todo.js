import React from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import allActions from '../store/actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const toggleTodo = (id) => {
    dispatch(allActions.todoActions.toggleTodo(id));
  };

  return (
    <li className='todo-item' onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? '👌' : '👋'}{' '}
      <span
        className={cx(
          'todo-item__text',
          todo && todo.completed && 'todo-item__text--completed'
        )}
      >
        {todo.content}
      </span>
    </li>
  );
};

export default Todo;
