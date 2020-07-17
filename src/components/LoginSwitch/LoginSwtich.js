import React from "react";
import { Typography, Grid, Switch } from "@material-ui/core/";

export default function LoginSwitch(props) {
  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Login</Grid>
        <Grid item>
          <Switch
            id="formswitch"
            color="default"
            inputProps={{ "aria-label": "secondary checkbox" }}
            checked={props.checked}
            onChange={props.handleSwitch}
          />
        </Grid>
        <Grid item>Create an Account</Grid>
      </Grid>
    </Typography>
  );
}
