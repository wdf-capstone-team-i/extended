import React from "react";
import { TextField, IconButton } from "@material-ui/core";
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

function MessageForm() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <ThemeProvider theme={theme}>
          <TextField id="standard-basic" label="Message" />

          <IconButton color="primary" aria-label="add an alarm">
            <SendIcon />
          </IconButton>
        </ThemeProvider>
      </form>
    </div>
  );
}

export default MessageForm;
