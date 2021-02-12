import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Users from './pages/Users';

export default [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    title: 'About',
    path: '/about',
    component: About,
  },
  {
    title: 'Users',
    path: '/users',
    component: Users,
    isAuth: false,
  },
  {
    title: 'Contact',
    path: '/contact',
    component: Contact,
    isAuth: false,
  },
];
