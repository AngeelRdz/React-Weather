import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from "./../../services/transformWeather";
import Location from "./Location";
import WeatherData from "./WeatherData";
// import { api_weather } from "./../../constants/api_url";
import "./styles.css";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);

    const { city } = props;

    this.state = {
      city,
      data: null
    };
  }

  componentDidMount() {
    console.log("componentDidMount: ");
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: ");
  }

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);

    fetch(api_weather)
      .then(resolve => {
        console.log(resolve);
        return resolve.json();
      })
      .then(data => {
        console.log("Resultado de handleUpdateClick: ");
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
        {data ? (
          <WeatherData data={data} />
        ) : (
          <CircularProgress size={50} />
        )}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
}

export default WeatherLocation;
