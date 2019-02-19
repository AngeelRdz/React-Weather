import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";

import "./styles.css";

import { CLOUD, WINDY } from "./../../constants/weathers";

const data = {
  temperature: 5,
  weatherState: CLOUD,
  humidity: 10,
  wind: "10 m/s"
};

const data2 = {
  temperature: 50,
  weatherState: WINDY,
  humidity: 100,
  wind: "100 m/s"
};

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Buenos Aires',
      data: data,
    };
  }

  handleUpdateClick = () => {
    console.log("actualizado");
    this.setState({
      city: 'Ciudad de México',
      data: data2
    })
  }

  render() {
    
    const { city, data } = this.state;

    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
