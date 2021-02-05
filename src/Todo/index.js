import React, { useState } from "react";

export const index = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

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
    setTodoText("");
  };

  const completeTodo = (todoItem) => {
    const updatedTodoList = todoList.map(todo => {
        if(todo.id === todoItem.id) {
            return {...todo, isDone: !todo.isDone}
        }
        return todo;
    });
    setTodoList(updatedTodoList);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <form onSubmit={addTodo}>
          <input type="text" value={todoText} onChange={onChangeText} />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
      <div>
        <For each="todo" of={todoList}>
          <div
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input type="checkbox" value={todo.isDone} onChange={() => completeTodo(todo)} />
            <h3 style={{ flex: 1, padding: "0 10px", textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.todoText}</h3>
            <input type="button" value="Delete" />
          </div>
        </For>
        {/* {todoList.map((todo) => (
          <div>
            <h3>{todo.todoText}</h3>
          </div>
        ))} */}
      </div>
    </div>
  );
};
