import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{process.env.REACT_APP_TITLE}</p>
        <p>{process.env.REACT_APP_API_BASE_URL}</p>
        <p>{process.env.NODE_ENV}</p>
      </header>
    </div>
  );
}

export default App;
