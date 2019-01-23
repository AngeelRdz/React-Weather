import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";

import { CLOUD, CLOUDY, RAIN, SUN, SNOW, WINDY } from "../constants/weathers";

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
  if (icon) {
    return <WeatherIcons name={icon} size="2x" />;
  } else {
    return <WeatherIcons name={"earthquake"} size="2x" />;
  }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {getWeatherIcon(weatherState)}
    <span>{`${temperature} Cº`}</span>
  </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
