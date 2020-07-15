import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class SignupForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSignup}>
          <TextField
            id="firstname"
            label="First Name"
            variant="outlined"
            margin="normal"
            fullWidth
            name="firstname"
            value={this.props.user.firstname}
            onChange={this.props.onChange}
          />
          <br />

          <TextField
            id="lastname"
            label="Last Name"
            variant="outlined"
            margin="normal"
            name="lastname"
            value={this.props.user.lastname}
            fullWidth
          />
          <br />

          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            margin="normal"
            name="email"
            value={this.props.user.email}
            fullWidth
          />
          <br />
          <TextField
            id="username"
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            name="username"
            value={this.props.user.username}
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
            value={this.props.user.password}
          />
          <br />

          <Button
            // onClick={this.redirect}
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
