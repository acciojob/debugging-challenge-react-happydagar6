import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  const handleButtonClick = () => {
    console.log("Button clicked!");
  }

  return (
    <div className="app-container">
      <label htmlFor="usernameInput">
        Enter Username:
      </label>
      <input type="text" id="usernameInput" />
      <button onClick={handleButtonClick}>
        Submit
      </button>
    </div>
  )
}


export default App;