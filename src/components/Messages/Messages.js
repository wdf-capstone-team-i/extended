import React from "react";
import { MessageForm } from "../index";
import io from "socket.io-client";

class Messages extends React.Component {
  constructor() {
    super();
    this.socket = io.connect("http://localhost:8080/");
    this.state = {
      chat: [],
      currentMessage: { message: "" },
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.formHandler = this.formHandler.bind(this);
  }

  componentDidMount() {
    this.socket.on("msg:receive", ({ message }) => {
      this.setState({
        ...this.state,
        chat: [...this.state.chat, { message }],
      });
    });
  }

  onTextChange(e) {
    this.setState({
      ...this.state,
      currentMessage: {
        ...this.state.currentMessage,
        [e.target.name]: e.target.value,
      },
    });
  }

  formHandler(e) {
    e.preventDefault();
    const { message } = this.state.currentMessage;
    if (!message) return;
    this.socket.emit("msg:send", { message });
    this.setState({
      ...this.state,
      currentMessage: { ...this.state.currentMessage, message: "" },
      chat: [...this.state.chat, { message }],
    });
  }

  render() {
    console.log(this.state);
    console.log("This is the messages", this.state.currentMessage);
    return (
      <div id="chat">
        <div id="chat-messages">
          {this.state.chat.map((data, idx) => (
            <div key={idx} className="chat-msg">
              <p>{data.message}</p>
            </div>
          ))}
        </div>
        <MessageForm
          formHandler={this.formHandler}
          onTextChange={this.onTextChange}
          message={this.state.currentMessage.message}
        />
      </div>
    );
  }
}

export default Messages;
