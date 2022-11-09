import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import CurrentWeather from './Components/current-weather/current-weather';
import { WEATHER_API_URL } from './Components/Api/Api';
import { API_KEY } from './Components/Api/Api';
import "./App.css"
import { Forecast } from './Components/forecast/forecast';

function App() {

const [currentWeather , setCurrentWeather] = useState(null);
  const [WeatherForcast , setWeatherForcast] = useState(null);

  const handelSearchChange = (searchData) => {
      const [lat , lon] = searchData.value.split(" ");

      const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

      const WeatherForcast = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

     Promise.all([CurrentWeatherFetch , WeatherForcast])
       .then(async (response) => {
         const WeatherResponse = await response[0].json();
         const forecastResponse = await response[1].json();

         setCurrentWeather({city: searchData.label , ...WeatherResponse});
         setWeatherForcast({city: searchData.label , ...forecastResponse});
       })
       .catch((err) => console.log(err));

  }

  console.log(currentWeather);
  console.log(WeatherForcast);

  return (
    <div className='container'>
      <Header />
      <Search onSearchChange={handelSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {WeatherForcast && <Forecast data={WeatherForcast} />}
    </div> 
  )
}

export default App