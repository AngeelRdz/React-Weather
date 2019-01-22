import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherLocation from "./components/WeatherLocation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bienvenidos
          </p>
          <WeatherLocation />
        </header>
      </div>
    );
  }
}

export default App;
