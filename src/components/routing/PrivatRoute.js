import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => state.userInfo.isAuthenticated);
    const loading = useSelector(state => state.userInfo.loading);
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
