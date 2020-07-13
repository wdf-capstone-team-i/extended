import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const SignupForm = (props) => {
  return (
    <div>
      <form>
        <TextField
          id="firstName"
          label="First Name"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <br />

        <TextField
          id="lastName"
          label="Last Name"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <br />

        <TextField
          id="email"
          label="Email Address"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          id="password"
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
        />
        <br />
        <br />
        <Link className="messages" to="/messages">
          <Button variant="contained" color="primary" fullWidth type="submit">
            Signup
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
