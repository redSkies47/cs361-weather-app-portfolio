import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <HomePage/>
          <p>yes this is some text.</p>
        </Route>
        <Route path="/city">
        </Route>
        <Route path="/forecast-f">
        </Route>
        <Route path="/forecast-c">
        </Route>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;