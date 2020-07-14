import React from "react";
import "./App.css";

import { Navbar } from "../index";
import Routes from "../../Routes";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="App-main">
        <Routes />
      </main>
    </div>
  );
};

export default App;
