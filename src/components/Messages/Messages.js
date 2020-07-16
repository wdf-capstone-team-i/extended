import React from "react";
import { MessageForm } from "../index";
import io from "socket.io-client";

class Messages extends React.Component {
  constructor() {
    super();
    this.socket = io.connect("http://localhost:8080/");
    this.state = {
      chat: [],
      currentMessage: { message: "", user: "" },
      page: "message",
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.formHandler = this.formHandler.bind(this);
  }

  componentDidMount() {
    this.socket.on("msg:receive", ({ message, user }, idx) => {
      this.setState({
        ...this.state,
        chat: [...this.state.chat, { message, user }],
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
    console.log("Message form username", this.props.username);
    const { message, user } = this.state.currentMessage;
    if (!message || !user) return;
    this.socket.emit("msg:send", { message, user: this.props.username });
    this.setState({
      ...this.state,
      currentMessage: { ...this.state.currentMessage, message: "" },
    });
  }

  render() {
    console.log(this.props);
    console.log("This is the messages", this.state.currentMessage);
    return (
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
    );
  }
}

export default Messages;
