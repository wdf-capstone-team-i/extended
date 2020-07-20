import React from "react";
import { MessageForm } from "../index";
import io from "socket.io-client";
import axios from "axios";
import "./Messages.css";

// const serverUrl =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:8080"
//     : "https://extended-chat.herokuapp.com";

//const serverUrl = "http://localhost:8080";
const serverUrl = "https://extended-chat.herokuapp.com";

function getUrl(tab) {
  const url = tab.url;
  const domain = new URL(url).hostname;
  let name = domain.split(".");
  if (name.length < 2) name.push("");
  name = name[name.length - 2];

  this.setState({
    domain,
    url,
    pageTitle: tab.title,

    name,
  });
  this.setState({ room: domain });
  this.socket.emit("new-user", domain);
  axios.get(`${serverUrl}/api/comments/domain/${domain}`).then(({ data }) => {
    this.setState({ chat: data });
  });
}

class Messages extends React.Component {
  constructor() {
    super();
    this.socket = io.connect(serverUrl);

    this.state = {
      chat: [],
      currentMessage: { message: "" },
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.getUrl = getUrl.bind(this);
  }

  componentDidMount() {
    if (window.chrome && window.chrome.tabs)
      window.chrome.tabs.getSelected(null, this.getUrl);
    else {
      const url = window.location.href;
      const domain = new URL(url).hostname;
      let name = domain.split(".");
      if (name.length < 2) name.push("");
      name = name[name.length - 2];

      this.setState({
        domain,
        url,
        pageTitle: document.title,

        name,
      });
      this.setState({ room: domain });
      this.socket.emit("new-user", domain);
      axios
        .get(`${serverUrl}/api/comments/domain/${domain}`)
        .then(({ data }) => {
          if (typeof data === "object") this.setState({ chat: data });
        });
    }

    this.socket.on("msg:receive", ({ message, user }, idx) => {
      this.setState({
        ...this.state,
        chat: [...this.state.chat, { text: message }],
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

    const socket = this.socket;
    const { message } = this.state.currentMessage;
    if (!message) return;
    axios
      .post(`${serverUrl}/api/comments/`, {
        domain: this.state.domain,
        url: this.state.url,
        name: this.state.name,
        text: message,
        pageTitle: this.state.pageTitle,
      })
      .then(({ data }) => {
        if (data) {
          socket.emit("msg:send", this.state.room, { message: data.text });
        }
      });

    this.setState({
      ...this.state,
      currentMessage: { ...this.state.currentMessage, message: "" },
    });
  }

  render() {
    return (
      <div id="chat">
        <div id="chat-messages" className="messages">
          {this.state.chat.map((data, idx) => (
            <div key={idx} className="chat-msg">
              <p>{data.text}</p>
            </div>
          ))}
          <MessageForm
            formHandler={this.formHandler}
            onTextChange={this.onTextChange}
            message={this.state.currentMessage.message}
          />
        </div>
      </div>
    );
  }
}

export default Messages;
