import React, { useState } from 'react';
import axios from 'axios';

const WeatherForm = ({ getWeather }) => {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setCity(value);

    if (value.length > 2) {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/search.json?key=1874f565cde34517bdc94258240507&q=${value}`);
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching autocomplete suggestions", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setCity(suggestion.name);  // Set the input to the selected suggestion
    setSuggestions([]);        // Clear the suggestions
    getWeather(suggestion.name); // Fetch weather for the selected city
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-6">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Get Weather
        </button>
      </form>

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <ul className="border border-gray-300 rounded mt-2 bg-white">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSelectSuggestion(suggestion)}
              className="cursor-pointer p-2 hover:bg-gray-100"
            >
              {suggestion.name}, {suggestion.region}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WeatherForm;
