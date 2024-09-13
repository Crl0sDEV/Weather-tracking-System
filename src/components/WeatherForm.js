import React, { useState } from 'react';

const WeatherForm = ({ getWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="p-2 border border-gray-300 rounded w-full"
      />
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;
