import './App.css';
import Nav from './components/Nav';
import React, { useState } from 'react';
import Countries from './components/Countries'



const App = () => {
  // 



  // toggle
  const [on, setOn] = useState(false);


  // country select
  const [region, setRegion] = useState('All');


  // prevents form from reloading page
  const handleSubmit = (e) => {
    e.preventDefault()
  }



  return (
    <div className="App">
      <Nav />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Search for a country" />
        </form>
        <button type="button" onClick={() => setOn((prev) => (!prev))} className='region'>Filter by Region</button>


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



        {/* component containing country cards */}
        <div className="card-container">
          {/* update the countries component whenever setRegion() is called */}
          <Countries region={region} />

        </div>
      </div>


    </div>
  );
}

export default App;
