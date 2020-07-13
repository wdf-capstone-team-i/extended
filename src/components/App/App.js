import React from "react";
import "./App.css";
import { Navbar } from "../index";
import Routes from "../../Routes";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
