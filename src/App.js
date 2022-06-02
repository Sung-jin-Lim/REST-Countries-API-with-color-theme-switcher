import './App.css';
import Nav from './components/Nav';
import React, { useState } from 'react';
import Countries from './components/Countries'
import SearchBar from './components/SearchBar';



const App = () => {
  // 
  const [inputValue, setInputValue] = useState('')

  console.log(inputValue)

  // toggle
  const [on, setOn] = useState(false);


  // country select
  const [region, setRegion] = useState('All');


  const [dark, setDark] = useState('light')



  return (
    <div className="App" data-theme={dark}>
      <Nav changeDark={theme => setDark(theme ? 'dark' : "light")} />
      <div className="container">

        {/* searchbar */}
        <SearchBar inputValue={inputValue => setInputValue(inputValue)} />

        <button type="button" onClick={() => setOn((prev) => (!prev))} className='region'>Filter by Region</button>

        {/* region filter */}
        {/* when setOn is true the ul is shown */}
        {on &&
          <ul className="filter-list">
            <li onClick={() => setRegion('All')} className="menu-items" >All</li>
            <li onClick={() => setRegion('Africa')} className="menu-items" >Africa</li>
            <li onClick={() => setRegion('Americas')} className="menu-items" >Americas</li>
            <li onClick={() => setRegion('Asia')} className="menu-items" >Asia</li>
            <li onClick={() => setRegion('Europe')} className="menu-items" >Europe</li>
            <li onClick={() => setRegion('Oceania')} className="menu-items" >Oceania</li>

          </ul>}




      </div>
      {/* component containing country cards */}
      <div className="card-container">
        <Countries region={region} inputValue={inputValue} />
      </div>


    </div>
  );
}

export default App;
