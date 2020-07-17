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
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            name="firstname"
            value={this.props.user.firstname || ""}
            onChange={this.props.handleChange}
            required
          />
          <br />

          <TextField
            id="lastname"
            label="Last Name"
            type="text"
            variant="outlined"
            margin="normal"
            name="lastname"
            value={this.props.user.lastname || ""}
            onChange={this.props.handleChange}
            required
          />
          <br />

          <TextField
            id="email"
            label="Email Address"
            type="text"
            variant="outlined"
            margin="normal"
            name="email"
            value={this.props.user.email || ""}
            onChange={this.props.handleChange}
            fullWidth
            required
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
            value={this.props.user.username || ""}
            onChange={this.props.handleChange}
            required
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
            value={this.props.user.password || ""}
            onChange={this.props.handleChange}
            required
          />
          <br />

          <Button variant="contained" color="primary" fullWidth type="submit">
            Signup
          </Button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
