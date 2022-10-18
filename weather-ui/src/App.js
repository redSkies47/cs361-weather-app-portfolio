import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Forecast from './pages/Forecast';
import Celsius from './pages/Forecast-C';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/city">
        </Route>
        <Route path="/forecast">
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