import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../store/actions';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(allActions.todoActions.addTodo(input));
    setInput('');
  };

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button className='add-todo' onClick={() => addTodo()}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
