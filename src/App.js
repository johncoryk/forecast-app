import React, { useState } from 'react';

import Form from './components/form';
import Card from './components/card';
import Layout from './components/layout';

function App() {
  const [weatherData, setWeatherData] = useState([]);

  const API_KEY = `${process.env.REACT_APP_WEATHER_API}`;

  const getWeather = async (e) => {
    const currentCity = e.target.city.value;
    const currentCountry = e.target.country.value;
    e.preventDefault();
    if (currentCity && currentCountry) {
      const apiCall = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity},${currentCountry}&APPID=${API_KEY}`
      );
      if (apiCall.ok) {
        const data = await apiCall.json();
        setWeatherData({
          data,
          city: data.name,
          country: data.sys.country,
          temp: Math.round((data.main.temp * 9) / 5 - 459.67),
          condition: data.weather[0].description,
          error: '',
        });
      } else {
        throw new Error(
          'Seems that city/country does not exist, please refresh your browser!'
        );
      }
    } else {
      setWeatherData({
        data: '',
        city: '',
        country: '',
        temp: '',
        condition: '',
        error: 'Please enter a valid city and country',
      });
    }
  };

  return (
    <>
      <Layout>
        <Form getWeather={getWeather} />
        <Card
          city={weatherData.city}
          country={weatherData.country}
          temp={weatherData.temp}
          condition={weatherData.condition}
          error={weatherData.error}
        />
      </Layout>
    </>
  );
}

export default App;
