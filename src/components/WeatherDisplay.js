import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  const { location, current } = weatherData;

  return (
    <div className="weather-display">
      <h2>{location.name}, {location.country}</h2>
      <p>Local Time: {current.last_updated}</p>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Feels Like: {current.feelslike_c}°C</p>
      <p>Condition: {current.condition.text}</p>
      <p>Wind: {current.wind_kph} km/h</p>
      <p>Humidity: {current.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
