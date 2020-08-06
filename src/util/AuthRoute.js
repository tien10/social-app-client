import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      // Neu co token redirect ve trang home, khi nao token het han, redirect ve trang login
      authenticated === true ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);
export default AuthRoute;
