import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import MessageForm from "../MessageBox/MessageForm";
import Navbar from "../Navbar/Navbar";
import Messages from "../Messages/Messages";
import io from "socket.io-client";

class App extends React.Component {
  constructor() {
    super();
    this.socket = io.connect('https://extended-chat.herokuapp.com/');

    this.state = {
      chat: [],
      currentMessage: { message: "", user: "" },
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.formHandler = this.formHandler.bind(this);
  }

  //const socketRef = useRef();
  //socketRef.current = io.connect('http://localhost:8080');
  componentDidMount() {
    this.socket.on("msg:receive", ({ message, user }, idx) => {
      this.setState({
        ...this.state,
        chat: [...this.state.chat, { message, user }],
      });
    });
  }

  onTextChange(e) {
    //state: {name: new text} // {...state, {name: other text"}}
<<<<<<< HEAD
    this.setState({...this.state, currentMessage: {...this.state.currentMessage, [e.target.name]: e.target.value} });
=======
    this.setState({
      ...this.state,
      currentMessage: { [e.target.name]: e.target.value },
    });
>>>>>>> 3544434fe816d688024473e8b136892c6e5e8106
  }

  formHandler(e) {
    e.preventDefault();
<<<<<<< HEAD
    const {message, user} = this.state.currentMessage;
    this.socket.emit('msg:send', {message, user});
    this.setState({...this.state, currentMessage: {...this.state.currentMessage, message: ''}});
=======
    const { message, user } = this.state.currentMessage;
    this.socket.emit("msg:send", { message, user });
    this.setState({ ...this.state, currentMessage: { message: "", user } });
>>>>>>> 3544434fe816d688024473e8b136892c6e5e8106
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <div id="chat">
            <div id="chat-messages">
              {this.state.chat.map((data, idx) => (
                <div key={idx} className="chat-msg">
                  <p>
                    {data.user}: {data.message}
                  </p>
                </div>
              ))}
            </div>
            <MessageForm
              formHandler={this.formHandler}
              onTextChange={this.onTextChange}
              message={this.state.currentMessage.message}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
