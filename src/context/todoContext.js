import React, { createContext, useReducer } from 'react';
import todoReducer, { initialState } from '../Todo/todoReducer';

export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
