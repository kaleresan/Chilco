import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Main from "./components/Main"


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/SignUp" exact component={SignUp} />
      <Route path="/ControlPanel" exact component={Main} />
    </Switch>
  );
}
