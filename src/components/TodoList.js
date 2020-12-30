import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';
import { VISIBILITY_FILTERS } from '../constants';

const TodoList = () => {
  const { todos } = useSelector((state) => {
    const { visibilityFilter, todoList, todo } = state;
    const allTodos = todoList.map((id) => ({
      ...todo[id],
      id,
    }));
    return {
      todos:
        visibilityFilter === VISIBILITY_FILTERS.ALL
          ? allTodos
          : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
          ? allTodos.filter((todo) => todo.completed)
          : allTodos.filter((todo) => !todo.completed),
    };
  });

  return (
    <ul className='todo-list'>
      {todos && todos.length
        ? todos.map((todo) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : 'No todos, yay!'}
    </ul>
  );
};

export default TodoList;
