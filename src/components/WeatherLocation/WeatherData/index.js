import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

import { CLOUD } from "./../../../constants/weathers";

import PropTypes from "prop-types";

const WeatherData = () => (
  <div>
    <h2>Weather Data</h2>
    <WeatherTemperature temperature={20} weatherState={CLOUD} />
    <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default WeatherData;
