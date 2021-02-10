import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FILTET_TYPE_COMPLETED, FILTET_TYPE_PENDING } from '../constants';

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TodoText = styled.h3`
  flex: 1;
  padding: 0 20px;
  text-decoration: ${props => (props.isDone ? 'line-through' : 'none')};
`;

const TodoList = ({ todoList, filterType, completeTodo, deleteTodo }) => {
  return (
    <For
      each="todo"
      of={todoList.filter(x => {
        if (filterType === FILTET_TYPE_COMPLETED) {
          return x.isDone === true;
        }
        if (filterType === FILTET_TYPE_PENDING) {
          return x.isDone === false;
        }
        return true;
      })}>
      <TodoContainer key={todo.id}>
        <input type="checkbox" checked={todo.isDone} onChange={() => completeTodo(todo)} />
        <TodoText isDone={todo.isDone}>{todo.todoText}</TodoText>
        <input type="button" value="Delete" onClick={() => deleteTodo(todo)} />
      </TodoContainer>
    </For>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      todoText: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
  filterType: PropTypes.string,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  filterType: 'all',
};

export default memo(TodoList);
