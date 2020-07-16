import React, { Component } from "react";
import { Messages, Signup } from "./components";
import axios from "axios";

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: null,
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

    this.setState({ ...this.state, user: { [event.target.name]: "" } });
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
      .then((res) => this.setState({ user: { id: res.data.id } }))
      .then((body) => console.log(body));
  }

  handleChange(event) {
    this.setState({
      user: { ...this.state.user, [event.target.name]: event.target.value },
    });
  }

  render() {
    let username = this.state.user.user;
    return this.state.user.id ? (
      <Messages username={username} />
    ) : (
      <Signup
        {...this.state}
        handleSignup={this.handleSignup}
        handleChange={this.handleChange}
      />
    );
  }
}
export default Routes;
