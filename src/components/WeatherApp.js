import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getWeather = async (city) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=1874f565cde34517bdc94258240507&q=${city}`);
            console.log(response.data);
            setWeather(response.data);
        } catch (error) {
            setError('Error fetching weather data');
        }

        setLoading(false);
    };

    return (
        <div>
            <WeatherForm getWeather={getWeather} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {weather && <WeatherDisplay weather={weather} />}
        </div>
    );
};

export default WeatherApp;
