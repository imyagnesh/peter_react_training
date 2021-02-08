import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FILTET_TYPE_ALL, FILTET_TYPE_COMPLETED, FILTET_TYPE_PENDING } from '../constants';

const Label = styled.label`
  color: green
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TodoText = styled.h3`
  flex: 1;
  padding: 0 20px;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
`;

const index = () => {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState(FILTET_TYPE_ALL);

  useEffect(() => () => {
  }, []);

  const onChangeText = (event) => {
    setTodoText(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = [
      { todoText, isDone: false, id: new Date().valueOf() },
      ...todoList,
    ];
    setTodoList(newTodo);
    setTodoText('');
  };

  const completeTodo = (todoItem) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoItem.id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const deleteTodo = (todoItem) => {
    const i = todoList.findIndex((todo) => todo.id === todoItem.id);
    const updatedTodoList = [
      ...todoList.slice(0, i),
      ...todoList.slice(i + 1),
    ];
    setTodoList(updatedTodoList);
  };

  return (
    <Container>
      <h1>Todo App</h1>
      <div>
        <form onSubmit={addTodo}>
          <Label htmlFor="addTask">Add Task</Label>
          <input id="addTask" placeholder="Write your task here..." type="text" value={todoText} onChange={onChangeText} />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
      <div>
        <For
          each="todo"
          of={todoList.filter((x) => {
            if (filterType === FILTET_TYPE_COMPLETED) {
              return x.isDone === true;
            } if (filterType === FILTET_TYPE_PENDING) {
              return x.isDone === false;
            }
            return true;
          })}
        >
          <TodoContainer
            key={todo.id}

          >
            <input type="checkbox" value={todo.isDone} onChange={() => completeTodo(todo)} />
            <TodoText isDone={todo.isDone}>{todo.todoText}</TodoText>
            <input type="button" value="Delete" onClick={() => deleteTodo(todo)} />
          </TodoContainer>
        </For>
        <div>
          <input type="button" value="All Tasks" onClick={() => setFilterType(FILTET_TYPE_ALL)} />
          <input type="button" value="Pending Tasks" onClick={() => setFilterType(FILTET_TYPE_PENDING)} />
          <input type="button" value="Completed Tasks" onClick={() => setFilterType(FILTET_TYPE_COMPLETED)} />
        </div>
      </div>
    </Container>
  );
};

export default index;
