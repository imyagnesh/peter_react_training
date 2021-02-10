import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FILTET_TYPE_ALL } from '../constants';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const index = () => {
  console.log('index file');
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState(FILTET_TYPE_ALL);
  const title = useRef();

  useEffect(() => {
    const loadTodoList = async () => {
      const res = await fetch('http://localhost:3000/todoList');
      const json = await res.json();
      setTodoList(json);
    };
    loadTodoList();
  }, []);

  const addTodo = async (event, todoText) => {
    event.preventDefault();
    const res = await fetch('http://localhost:3000/todoList', {
      method: 'POST',
      body: JSON.stringify({ todoText, isDone: false }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const json = await res.json();
    setTodoList([json, ...todoList]);
  };

  const completeTodo = todoItem => {
    const updatedTodoList = todoList.map(todo => {
      if (todo.id === todoItem.id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const deleteTodo = todoItem => {
    const i = todoList.findIndex(todo => todo.id === todoItem.id);
    const updatedTodoList = [...todoList.slice(0, i), ...todoList.slice(i + 1)];
    setTodoList(updatedTodoList);
  };

  return (
    <Container>
      <h1 ref={title}>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        filterType={filterType}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <TodoFooter setFilterType={setFilterType} />
    </Container>
  );
};

export default index;
