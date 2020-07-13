import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Messages, Signup } from "./components";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Messages} />
        <Route path="/signup" component={Signup} />
      </Switch>
    );
  }
}

export default Routes;
