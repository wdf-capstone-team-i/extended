import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
import { Messages, Signup } from "./components";

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      page: "message",
    };
  }

  render() {
    //   return (
    //     <Switch>
    //       <Route path="/messages" component={Messages} />
    //       <Route path="/" component={Signup} />
    //     </Switch>
    //   );

    let currentpage = null;
    switch (this.state.page) {
      case "signup":
        currentpage = <Signup />;
        break;
      case "message":
        currentpage = <Messages />;
        break;
      default:
        return currentpage;
    }

    return currentpage;
  }
}

export default Routes;
