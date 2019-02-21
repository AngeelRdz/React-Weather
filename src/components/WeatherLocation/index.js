import React, { Component } from "react";
import transformWeather from './../../services/transformWeather';
import Location from "./Location";
import WeatherData from "./WeatherData";
import { api_weather } from './../../constants/api_url';
import "./styles.css";

import { CLOUD } from "./../../constants/weathers";

const data = {
  temperature: 5,
  weatherState: CLOUD,
  humidity: 10,
  wind: "10 m/s"
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Buenos Aires",
      data: data
    };
  }

  handleUpdateClick = () => {
    fetch(api_weather)
      .then(resolve => {
        console.log(resolve);
        return resolve.json();
      })
      .then(data => {
        const newWeather = transformWeather(data);
        console.log(newWeather);
        this.setState({
          data: newWeather
        });
        console.log(data);
      });
  };

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
