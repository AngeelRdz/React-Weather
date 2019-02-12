import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

import { CLOUD } from "./../../../constants/weathers";

import PropTypes from "prop-types";

import './styles.css';

const WeatherData = () => (
  <div className="weatherDataCont">
    <WeatherTemperature temperature={20} weatherState={CLOUD} />
    <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default WeatherData;
