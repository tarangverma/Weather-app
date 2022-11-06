import React from 'react';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import "./App.css"

function App() {

  const handelSearchChange = (searchData) => {
      console.log(searchData);
  }

  return (
    <div>
      <Header />
      <Search onSearchChange={handelSearchChange}/>
    </div>
  )
}

export default App