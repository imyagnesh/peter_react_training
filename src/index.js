import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from './context/localeContext';
import { TodoProvider } from './context/todoContext';
import Navigation from './Navigation';
// import App from './App'
import Todo from './Todo';
// const a = 10;

// const obj = {
//   a: 1,
//   b: 2
// }

// const { a: aa } = obj

// in html this is called attribute
// in react text is called as props(properties)
{
  /* <TodoProvider>
    <LocaleProvider>
      <Todo />
    </LocaleProvider>
  </TodoProvider> */
}
ReactDOM.render(<Navigation />, document.getElementById('root'));
