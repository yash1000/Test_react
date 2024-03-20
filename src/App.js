// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingIndicator from './components/LoadingIndicator';
import { WEATHER_API_URL } from './config'; // Import the API URL constant
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${WEATHER_API_URL}&q=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData('London');
  }, []);

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <WeatherForm onSubmit={fetchWeatherData} />
      {loading && <LoadingIndicator />}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
