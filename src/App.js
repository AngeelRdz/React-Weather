import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherLocation from "./components/WeatherLocation";
import LocationList from './components/LocationList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <WeatherLocation city="Ciudad de México, mx" /> */}
          <LocationList />
        </header>
      </div>
    );
  }
}

export default App;
