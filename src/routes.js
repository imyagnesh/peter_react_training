// import About from './pages/About';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import Users from './pages/Users';
import React from 'react';

// import { lazy } from 'react';
import loadable from '@loadable/component';

const AsyncPage = loadable(props => import(`./${props.page}`), {
  fallback: <h1>Loading</h1>,
  cacheKey: props => props.page,
});

// lazy and suspense not work on server side renderin

// const ContactAsync = loadable(() => import('./pages/About'), {
//   fallback: <h1>Loading...</h1>,
// });
// const AboutAsync = loadable(() => import('./pages/Contact'), {
//   fallback: <h1>Loading...</h1>,
// });
// const HomeAsync = loadable(() => import('./pages/Home'), {
//   fallback: <h1>Loading...</h1>,
// });
// const UsersAsync = loadable(() => import('./pages/Users'), {
//   fallback: <h1>Loading...</h1>,
// });

export default [
  {
    title: 'Home',
    path: '/',
    render: props => <AsyncPage page="pages/Home" {...props} />,
    exact: true,
  },
  {
    title: 'About',
    path: '/about',
    render: props => <AsyncPage page="pages/About" {...props} />,
  },
  {
    title: 'Users',
    path: '/users',
    render: props => <AsyncPage page="pages/Users" {...props} />,
    isAuth: false,
  },
  {
    title: 'Contact',
    path: '/contact',
    render: props => <AsyncPage page="pages/Contact" {...props} />,
    isAuth: false,
  },
];
