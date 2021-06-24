import React from "react";

import Routes from "./config/routes";
import Navbar from "./components/navbar";

import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <div className="container">
          <Navbar />
          <Routes />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
