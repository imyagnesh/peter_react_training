import React, { useRef, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import {
  ADD_TODO,
  DELETE_TODO,
  FAIL,
  FILTET_TYPE_ALL,
  LOAD_TODO,
  REQUEST,
  SUCCESS,
  UPDATE_TODO,
} from '../constants';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from '../utils/axios';
import todoReducer, { initialState } from './todoReducer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const index = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const title = useRef();

  useEffect(() => {
    const loadTodoList = async () => {
      try {
        dispatch({ type: `${LOAD_TODO}_${REQUEST}` });
        const res = await axios.get('todoList');
        dispatch({ type: `${LOAD_TODO}_${SUCCESS}`, payload: res.data });
      } catch (err) {
        dispatch({ type: `${LOAD_TODO}_${FAIL}`, payload: err });
      }
    };
    loadTodoList();
  }, []);

  const addTodo = async (event, todoText) => {
    try {
      event.preventDefault();
      dispatch({ type: `${ADD_TODO}_${REQUEST}` });
      const res = await axios.post('todoList', { todoText, isDone: false });
      dispatch({ type: `${ADD_TODO}_${SUCCESS}`, payload: res.data });
    } catch (err) {
      dispatch({ type: `${ADD_TODO}_${FAIL}`, payload: err });
    }
  };

  const completeTodo = async todoItem => {
    try {
      dispatch({ type: `${UPDATE_TODO}_${REQUEST}` });
      const res = await axios.put(`todoList/${todoItem.id}`, {
        ...todoItem,
        isDone: !todoItem.isDone,
      });
      dispatch({ type: `${UPDATE_TODO}_${SUCCESS}`, payload: res.data });
    } catch (err) {
      dispatch({ type: `${UPDATE_TODO}_${FAIL}`, payload: err });
    }
  };

  const deleteTodo = async todoItem => {
    try {
      dispatch({ type: `${DELETE_TODO}_${REQUEST}` });
      await axios.delete(`todoList/${todoItem.id}`);
      dispatch({ type: `${DELETE_TODO}_${SUCCESS}`, payload: todoItem });
    } catch (err) {
      dispatch({ type: `${DELETE_TODO}_${FAIL}`, payload: err });
    }
  };

  if (state.loading) {
    return <h1>Loading....</h1>;
  }

  if (state.error) {
    return <h1>{state.error.message}</h1>;
  }

  return (
    <Container>
      <h1 ref={title}>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoList={state.data}
        filterType="all"
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      {/* <TodoFooter setFilterType={setFilterType} /> */}
    </Container>
  );
};

export default index;
