import React, { Component } from "react";
import { Messages, Signup } from "./components";
import axios from "axios";

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
      },
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSignup(event) {
    event.preventDefault();

    this.setState({ user: { [event.target.name]: "" } });
    event.preventDefault();
    let firstname = event.target.firstname.value;
    let lastname = event.target.lastname.value;
    let email = event.target.email.value;
    let username = event.target.username.value;
    let password = event.target.password.value;

    axios
      .post("http://localhost:8080/api/users", {
        firstname,
        lastname,
        email,
        username,
        password,
      })
      .then((res) => res.data)
      .then((body) => console.log(body));
  }

  handleChange(event) {
    this.setState({
      user: { [event.target.name]: event.target.value },
    });
    console.log(this.state.user.firstname);
  }

  render() {
    return this.state.user.id ? (
      <Messages />
    ) : (
      <Signup
        handleSignup={this.handleSignup}
        {...this.state}
        onChange={this.handleChange}
      />
    );
  }
}
export default Routes;
