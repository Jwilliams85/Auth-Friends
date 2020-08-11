import React from "react";
import { Route, Redirect } from "react-router-dom";
//Private Route Rules:
// 1. same API as Route
// 2. render a <Route /> and passes the props to it
// 3. check if we have auth token. if so, we render Component
//    from the component prop. if not, we redirect to /login

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        // check if authed??????
        if (localStorage.getItem("authToken")) {
          return <Component />; // return Component if authed
        }
        // redirect to /login if not
        console.log("redirecting to login");
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
