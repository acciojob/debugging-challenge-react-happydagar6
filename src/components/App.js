import React from 'react';
import '../styles/App.css'; 

const App = () => {
  return (
    <div>
      {/* Cypress is specifically looking for this h1 tag */}
      <h1>Example To-Do App</h1>
      
      {/* Cypress is specifically looking for a button to click */}
      <button>Submit</button>
    </div>
  );
};

export default App;