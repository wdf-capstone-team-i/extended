import React, { useState } from "react";
import io from "socket.io-client";
import { TextField, IconButton } from "@material-ui/core";
import "./MessageForm.css";
import SendIcon from "@material-ui/icons/Send";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
  },
});

function MessageForm(props) {
  const classes = useStyles();

  const messages = document.querySelector("#chat-messages");

  return (
    <div>
      <form
        id="chat-form"
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={props.formHandler}
      >
        <ThemeProvider theme={theme}>
          <TextField
            label="Username"
            id="user"
            name="user"
            onChange={props.onTextChange}
          />
          <TextField
            id="standard-basic"
            name="message"
            label="Message"
            value={props.message}
            onChange={props.onTextChange}
          />

          <IconButton type="submit" color="primary" aria-label="add an alarm">
            <SendIcon />
          </IconButton>
        </ThemeProvider>
      </form>
    </div>
  );
}

export default MessageForm;
