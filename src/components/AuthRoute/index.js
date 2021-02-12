import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location, ...restProps }) =>
        isAuth ? (
          <Component location {...restProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/about',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
