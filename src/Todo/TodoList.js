import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TodoContext } from '../context/todoContext';

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TodoText = styled.h3`
  flex: 1;
  padding: 0 20px;
  text-decoration: ${props => (props.isDone ? 'line-through' : 'none')};
`;

const TodoList = ({ completeTodo, deleteTodo }) => {
  const {
    state: { filtetedData },
  } = useContext(TodoContext);
  return (
    <For each="todo" of={filtetedData}>
      <TodoContainer key={todo.id}>
        <input type="checkbox" checked={todo.isDone} onChange={() => completeTodo(todo)} />
        <TodoText isDone={todo.isDone}>{todo.todoText}</TodoText>
        <input type="button" value="Delete" onClick={() => deleteTodo(todo)} />
      </TodoContainer>
    </For>
  );
};

TodoList.propTypes = {
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoList);
