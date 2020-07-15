import React from "react";
import { MessageForm } from "../index";
import io from "socket.io-client";
import axios from "axios"

function getUrl(tab) {
  const url = tab.url
  const domain = new URL(url).hostname
  const name = domain.split('.')
  if (name.length < 2) name.push('')
  this.setState({
    domain, 
    url, 
    pageTitle: tab.title,
    name: name[name.length - 2]
  })
  this.setState({room: domain})
  this.socket.emit("new-user", domain)
  axios.get(`http://localhost:8080/api/comments/domain/${domain}`)
  .then(({data}) => {
    console.log('data rceived from post:', data)
    this.setState({chat: data})
  })
  // const chatHistory = window.localStorage.getItem('chat-history' + domain);
  // if(!chatHistory){
  //   window.localStorage.setItem('chat-history' + domain, JSON.stringify(this.state.chat));
  // }else{
  //   this.setState({...this.state, chat: JSON.parse(chatHistory)});
  // }
}

class Messages extends React.Component {
  constructor() {
    super();
    this.socket = io.connect("http://localhost:8080/");

    this.state = {
      chat: [],
      currentMessage: { message: "", user: "" },
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.getUrl = getUrl.bind(this)
  }

  componentDidMount() {
    if (window.chrome && window.chrome.tabs) window.chrome.tabs.getSelected(null, this.getUrl)
    else {
      const url = window.location.href
      const domain = new URL(url).hostname
      const name = domain.split('.')
      if (name.length < 2) name.push('')
      this.setState({
        domain, 
        url, 
        pageTitle: document.title,
        name: name[name.length - 2]
      })
      this.setState({room: domain})
      this.socket.emit("new-user", domain)
      axios.get(`http://localhost:8080/api/comments/domain/${domain}`)
      .then(({data}) => {
        console.log('testing')
        console.log('data rceived from post:', data)
        if (typeof data === 'object') this.setState({chat: data})
      })
    }

    this.socket.on("msg:receive", ({ message, user }, idx) => {
      console.log(`receiving message: message: ${message} user: ${user}`)
      this.setState({
        ...this.state,
        chat: [...this.state.chat, { text: message, user: {username: user} }],
      });
      
      // window.localStorage.setItem('chat-history' + this.state.room, JSON.stringify(this.state.chat))
    });
  }

  onTextChange(e) {
    console.log('onTextChange')
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
    const socket = this.socket
    const { message, user } = this.state.currentMessage;
    if (!message || !user) return;
    axios.post(`http://localhost:8080/api/comments/`, {
      domain: this.state.domain, 
      url: this.state.url,
      name: this.state.name,
      text: message,
      pageTitle: this.state.pageTitle
    })
    .then(({data}) => {
      if (data) {
        socket.emit("msg:send", this.state.room, {message: data.text, user})
        console.log(`comment: ${data.text} user: ${user}`)
      }
    })
    // this.socket.emit("msg:send", this.state.room, { message, user });
    this.setState({
      ...this.state,
      currentMessage: { ...this.state.currentMessage, message: "" },
    });
  }

  render() {
    console.log('STATE:', this.state)
    return (
      <div >
        <header className="App-header">
          <div id="chat">
            <div id="chat-messages">
              {this.state.chat.map((data, idx) => (
                <div key={idx} className="chat-msg">
                  <p>
                    {data.user.username}: {data.text}
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

export default Messages;
