import React from "react";
import "./App.css";
import { Navbar } from "../index";
import Routes from "../../Routes";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
};

export default App;
