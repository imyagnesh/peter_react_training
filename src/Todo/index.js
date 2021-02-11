import React, { useRef, useEffect, useCallback, useContext } from 'react';
import styled from 'styled-components';
import {
  ADD_TODO,
  DELETE_TODO,
  FAIL,
  FILTER_TODO,
  LOAD_TODO,
  REQUEST,
  SUCCESS,
  UPDATE_TODO,
} from '../constants';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from '../utils/axios';
import { TodoContext } from '../context/todoContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const index = () => {
  const {
    state: { loading, error },
    dispatch,
  } = useContext(TodoContext);
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

  const addTodo = useCallback(async (event, todoText) => {
    try {
      event.preventDefault();
      dispatch({ type: `${ADD_TODO}_${REQUEST}` });
      const res = await axios.post('todoList', { todoText, isDone: false });
      dispatch({ type: `${ADD_TODO}_${SUCCESS}`, payload: res.data });
    } catch (err) {
      dispatch({ type: `${ADD_TODO}_${FAIL}`, payload: err });
    }
  }, []);

  const completeTodo = useCallback(async todoItem => {
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
  }, []);

  const deleteTodo = useCallback(async todoItem => {
    try {
      dispatch({ type: `${DELETE_TODO}_${REQUEST}` });
      await axios.delete(`todoList/${todoItem.id}`);
      dispatch({ type: `${DELETE_TODO}_${SUCCESS}`, payload: todoItem });
    } catch (err) {
      dispatch({ type: `${DELETE_TODO}_${FAIL}`, payload: err });
    }
  }, []);

  const setFilterType = useCallback(filterType => {
    dispatch({ type: FILTER_TODO, payload: filterType });
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Container>
      <h1 ref={title}>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList completeTodo={completeTodo} deleteTodo={deleteTodo} />
      <TodoFooter setFilterType={setFilterType} />
    </Container>
  );
};

export default index;
