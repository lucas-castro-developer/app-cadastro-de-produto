import React from "react";

import Routes from "./config/routes";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes />
      </div>
    </>
  );
}

export default App;
