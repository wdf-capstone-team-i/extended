import React from "react";
import "./App.css";
import MessageForm from "../MessageBox/MessageForm";
import Navbar from "../Navbar/Navbar";
import Messages from "../Messages/Messages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Messages />
        <MessageForm />
      </header>
    </div>
  );
}

export default App;
