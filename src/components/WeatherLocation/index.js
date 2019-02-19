import React, { Component } from "react";
import convert from 'convert-units';
import Location from "./Location";
import WeatherData from "./WeatherData";

import "./styles.css";

import { CLOUD } from "./../../constants/weathers";

const location = "Buenos Aires, ar";
const api_key = "f777032bfafe7e73f5f4d374915a7678";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`; 
// const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`; 

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
      city: 'Buenos Aires',
      data: data,
    };
  }

  getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
  }

  getWeatherState = weather_data => {
    return CLOUD;
  }

  getData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(weather_data);
    const temperature = this.getTemp(temp);

    const data = {
      humidity,
      temperature,
      weatherState,
      wind: `${speed} m/s`
    };

    return data;

  }

  handleUpdateClick = () => {
    fetch(api_weather).then( resolve => {
      console.log(resolve);
      return resolve.json();
    }).then(data => {
      const newWeather = this.getData(data);
      console.log(newWeather);
      this.setState({
        data: newWeather
      });
      console.log(data);
    });
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
