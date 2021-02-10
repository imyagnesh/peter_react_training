import React, { memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from '../components/TextInput';

const Label = styled.label`
  color: green;
`;

const TodoForm = ({ addTodo }) => {
  console.log('TodoForm file');
  const textInputRef = useRef();
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  const onSubmit = e => {
    addTodo(e, todoText);
    setTodoText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="addTask">Add Task</Label>
      <TextInput
        ref={textInputRef}
        id="addTask"
        placeholder="Write your task here..."
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default memo(TodoForm);
