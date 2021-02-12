import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from './routes';

const Navigation = () => {
  return (
    <Router>
      <nav>
        <ul>
          {routes.map(x => (
            <li>
              <Link to={x.path}>{x.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Switch>
          {routes.map(x => (
            <Route {...x} />
          ))}
        </Switch>
      </main>
    </Router>
  );
};

export default Navigation;
