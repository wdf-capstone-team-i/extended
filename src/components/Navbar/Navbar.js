import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import yellow from "@material-ui/core/colors/yellow";
import SimpleMenu from "../Menu/Menu";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
  },
});

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Extended
            </Typography>
            <div>
              <VisibilityIcon />
            </div>
            <SimpleMenu />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
export default Navbar;
