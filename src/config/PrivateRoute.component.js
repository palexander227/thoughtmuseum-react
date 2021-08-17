import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./routes";

const PrivateRoute = (props) => {
  const { isLoggedIn } = useSelector((state) => state.userStore);

  return isLoggedIn ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: routes.home.path,
        state: { from: props.location },
      }}
    />
  );
};

export default PrivateRoute;
