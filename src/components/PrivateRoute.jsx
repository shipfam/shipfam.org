import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  render: Component,
  isLoggedIn,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
