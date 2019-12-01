import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={SignIn} appProps={appProps} />
      <AppliedRoute
        path="/SignUp"
        exact
        component={SignUp}
        appProps={appProps}
      />
      <AppliedRoute
        path="/ControlPanel"
        exact
        component={Main}
        appProps={appProps}
      />
      <Route component={SignIn} appProps={appProps} />
    </Switch>
  );
}
