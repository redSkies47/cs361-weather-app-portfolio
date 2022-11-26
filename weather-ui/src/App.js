import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Forecast from './pages/Forecast.js';
import Celsius from './pages/Forecast-C';


function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/forecast-f">
          <Forecast/>
        </Route>
        <Route path="/forecast-c">
          <Celsius/>
        </Route>
      </Router>
    </div>
  );
}

export default App;