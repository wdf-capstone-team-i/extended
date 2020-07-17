import React, { Component } from "react";
import { Messages, Signup, LoginForm, LoginSwitch } from "./components";
import axios from "axios";

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
      checked: false,
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  async componentDidMount() {
    try {
      const { data } = await  axios.get(
        'http://localhost:8080/api/users/me',
        { withCredentials: true }
      )
      if (data) {
        console.log('DATA RECIEVED FROM GET ME:', data)
        this.setState({user: data})
      }
    } catch(error) {
      console.error(error)
    }
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

      },
      { withCredentials: true }
      )
      .then((res) => this.setState({ user: { id: res.data.id } }))

  }

  async handleLogin(event) {
    event.preventDefault();
    const { username, password } = event.target;

    const { data } = await axios.post("http://localhost:8080/api/users/login", {
      username: username.value,

      password: password.value
    },
    { withCredentials: true }
    );
    this.setState({user: {
            id: data.id,
            firstname: data.firstname,
            lastname: data.lastname,
            username: data.username,
            email: data.email
        }})

  }

  handleChange(event) {
    this.setState({
      user: { ...this.state.user, [event.target.name]: event.target.value },
    });
  }
  handleSwitch = (event) => {
    this.setState({
      ...this.state,
      checked: !this.state.checked,
    });
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
        <LoginSwitch
          checked={this.state.checked}
          handleSwitch={this.handleSwitch}
        />
      </div>
    ) : (
      <div>
        <LoginForm handleLogin={this.handleLogin} />
        <LoginSwitch
          checked={this.state.checked}
          handleSwitch={this.handleSwitch}
        />
      </div>
    );
  }
}
export default Routes;
