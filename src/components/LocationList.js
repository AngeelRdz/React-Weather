import React from "react";
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city="Bogotá, col" />
        <WeatherLocation city="Ciudad de México, mx" />
        <WeatherLocation city="Buenos aires, ar" />
        <WeatherLocation city="Cali, col" />

    </div>
);

export default LocationList;