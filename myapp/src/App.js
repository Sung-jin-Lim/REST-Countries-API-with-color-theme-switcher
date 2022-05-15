import './App.css';
import Nav from './components/Nav';
import React from 'react';

function App() {
  // toggle
  const [on, setOn] = React.useState(false);


  // country select
  const [country, setCountry] = React.useState('none');
  console.log(country)

  function redirect(info) {
    setCountry(info);
  }
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <form>
          <input type="search" placeholder="Seach for a country" />

        </form>
        <button onClick={() => setOn((prev) => (!prev))} className='region'>Filter by Region</button>
        {on &&
          <ul>
            <li onClick={() => redirect('Africa')} className="menu-items">Africa</li>
            <li onClick={() => redirect('America')} className="menu-items">America</li>
            <li onClick={() => redirect('Asia')} className="menu-items">Asia</li>
            <li onClick={() => redirect('Europe')} className="menu-items">Europe</li>
            <li onClick={() => redirect('Oceania')} className="menu-items">Oceania</li>

          </ul>}

        {/* cards time! */}

      </div>
    </div>
  );
}

export default App;
