import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import axios from "axios";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      page: "signup",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    console.log("Redirected ");
    return <Redirect to="/messages" />;
  }

  handleSubmit(event) {
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

  componentDidMount() {
    console.log("This is mounted");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="firstname"
            label="First Name"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            name="firstname"
          />
          <br />

          <TextField
            id="lastname"
            label="Last Name"
            type="text"
            variant="outlined"
            margin="normal"
            name="lastname"
            fullWidth
          />
          <br />

          <TextField
            id="email"
            label="Email Address"
            type="text"
            variant="outlined"
            margin="normal"
            name="email"
            fullWidth
          />
          <br />
          <TextField
            id="username"
            fullWidth
            label="Username"
            type="text"
            variant="outlined"
            margin="normal"
            name="username"
          />
          <br />
          <TextField
            id="password"
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            name="password"
          />
          <br />
          <Button
            onClick={this.redirect}
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
