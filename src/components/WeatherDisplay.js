import React from 'react';

const WeatherDisplay = ({ weather }) => {
    return (
        <div>
            <h3>Weather in {weather.location.name}</h3>
            <p>Temperature: {weather.current.temp_c}°C</p>
            <p>Humidity: {weather.current.humidity}%</p>
            <p>Conditions: {weather.current.condition.text}</p>
        </div>
    );
};

export default WeatherDisplay;