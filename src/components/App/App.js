import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MessageForm from "../MessageBox/MessageForm";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Hello World</h1>

        <p>Messages will show here</p>

        <MessageForm />
      </header>
    </div>
  );
}

export default App;
