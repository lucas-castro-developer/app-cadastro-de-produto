import React from "react";

import Home from "./views/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
