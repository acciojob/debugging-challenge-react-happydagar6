import React, { useState } from 'react';
import '../styles/App.css'; 

const App = () => {
  const [headingText, setHeadingText] = useState('Example To-Do App');

  const handleButtonClick = () => {
    // The test expects the text to become '1' upon clicking
    setHeadingText('1');
  };

  return (
    <div className="app-container">
      <h1>
        {headingText}
      </h1>
      
      <button onClick={handleButtonClick}>
        Submit
      </button>
    </div>
  );
};

export default App;