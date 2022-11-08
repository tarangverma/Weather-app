import React from 'react';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import CurrentWeather from './Components/current-weather/current-weather';
import "./App.css"

function App() {

  const handelSearchChange = (searchData) => {
      console.log(searchData);
  }

  return (
    <div className='container'>
      <Header />
      <Search onSearchChange={handelSearchChange}/>
      <CurrentWeather />
    </div>
  )
}

export default App