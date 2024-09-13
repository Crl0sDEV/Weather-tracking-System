import React from 'react';

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold">Weather in {weather.location.name}</h3>
      <p className="text-lg mt-2">Temperature: {weather.current.temp_c}°C</p>
      <p className="text-lg mt-1">Humidity: {weather.current.humidity}%</p>
      <p className="text-lg mt-1">Conditions: {weather.current.condition.text}</p>
    </div>
  );
};

export default WeatherDisplay;
