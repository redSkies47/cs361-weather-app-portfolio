import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Forecast from './pages/Forecast.js';
import Celsius from './pages/Forecast-C';
import { useState } from 'react';


function App() {

  const [setForecastDisplayed] = useState([]);
  // console.log("does this ever log anywhere?")
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <HomePage forecastToDisplay={setForecastDisplayed}/>
        </Route>
        <Route path="/city">
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