import React from "react";

function App() {
  return (
    <div className="App">
      <div className="alert alert-dismissible alert-warning">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <h4 className="alert-heading">Warning!</h4>
        <p className="mb-0">
          Hello
          <a href="#" className="alert-link">
            Bootswatch
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
