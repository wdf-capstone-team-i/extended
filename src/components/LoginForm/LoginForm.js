import React from "react";
import { TextField, Button } from "@material-ui/core";

const LoginForm = (props) => {
  const { handleLogin } = props;
  return (
    <form onSubmit={handleLogin}>
      <TextField name="username" label="username" variant="outlined" />

      <TextField
        id="password"
        name="password"
        label="password"
        type="password"
        variant="outlined"
      />
      <br />
      <br />
      <br />

      <Button variant="contained" color="primary" fullWidth type="submit">
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
