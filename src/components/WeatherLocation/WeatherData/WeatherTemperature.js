import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import "./styles.css";

import {
  CLOUD,
  CLOUDY,
  RAIN,
  SUN,
  SNOW,
  WINDY
} from "./../../../constants/weathers";

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [RAIN]: "rain",
  [SUN]: "day-sunny",
  [SNOW]: "snow",
  [WINDY]: "windy"
};

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  const sizeIcon = "4x";

  if (icon) {
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  } else {
    return (
      <WeatherIcons className="wicon" name={"earthquake"} size={sizeIcon} />
    );
  }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType"> {`Cº`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
