import React, { useState } from "react";
import "../src/App.css";

const API_KEY = "906dffe2c9087030dd13b6838cf2a1d0 ";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
     <div>
    <div className="app">
      <h2>🌤 Weather App</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {weather && weather.main && (
        <div className="weather-info">
          <h3>📍 {weather.name}</h3>
          <p>🌥 {weather.weather[0].description}</p>
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}

      
    </div>
    <footer className="footer">
        <p>By Sandeep , Varinder , Parvesh</p>
    </footer>

   </div>
  );
}

export default App;