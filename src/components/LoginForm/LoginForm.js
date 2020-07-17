import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
  },
});

const LoginForm = (props) => {
  const { handleLogin } = props;
  return (
    <form onSubmit={handleLogin}>
      <br />
      <br />
      <br />
      <br />
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

      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" fullWidth type="submit">
          Login
        </Button>
      </ThemeProvider>
    </form>
  );
};

export default LoginForm;
