import React, { Component } from "react";
import { Messages, Signup } from "./components";
import axios from "axios";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LoginForm from "./components/LoginForm/LoginForm";

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: null,
        firstname: "",
        lastname: "",
        email: "",
        username: "",
      },
      checked: true,
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleSignup(event) {
    event.preventDefault();

    this.setState({ ...this.state, user: { [event.target.name]: "" } });
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
      .then((res) => this.setState({ user: { id: res.data.id } }))
      .then((body) => console.log(body));
  }

  async handleLogin(event) {
    event.preventDefault();
    const { username, password } = event.target;

    const { data } = await axios.post("http://localhost:8080/api/users/login", {
      username: username.value,
      password: password.value,
    });

    this.setState({
      user: {
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        username: data.username,
        email: data.email,
      },
    });
  }

  handleChange(event) {
    this.setState({
      user: { ...this.state.user, [event.target.name]: event.target.value },
    });
  }

  handleSwitch = (event) => {
    this.setState({ ...this.state, checked: !this.state.checked });
  };

  render() {
    let username = this.state.user.user;
    return this.state.user.id ? (
      <Messages username={username} className="message-container" />
    ) : this.state.checked ? (
      <div>
        <Signup
          {...this.state}
          handleSignup={this.handleSignup}
          handleChange={this.handleChange}
        />
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Login</Grid>
            <Grid item>
              <Switch
                id="formswitch"
                color="default"
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
                checked={this.state.checked}
                onChange={this.handleSwitch}
              />
            </Grid>
            <Grid item>Signup</Grid>
          </Grid>
        </Typography>
      </div>
    ) : (
      <div>
        <LoginForm handleLogin={this.handleLogin} />
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Login</Grid>
            <Grid item>
              <Switch
                id="formswitch"
                color="default"
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
                checked={this.state.checked}
                onChange={this.handleSwitch}
              />
            </Grid>
            <Grid item>Signup</Grid>
          </Grid>
        </Typography>
      </div>
    );
  }
}
export default Routes;
