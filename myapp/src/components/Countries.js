import React, { useState, useEffect } from 'react';

// import axios from 'axios'
const Countries = () => {

  const [countries, setCountries] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const fetchItems = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()
    // console.log((result.data)[0].population)
    setCountries(countries)
    console.log(countries)


  }
  useEffect(() => {


    fetchItems()
  }, [])

  // random two numbers so that slice different section every load
  // the two numbers must always be 5 numbers apart
  const random2 = Math.floor(Math.random() * countries.length)
  const random = random2 - 5;

  return (
    <>
      {countries.slice(random, random2).map((country) => {
        const { id, name, capital, continents, flags, population } = country
        return (
          <div className='card' key={id}>
            <img src={flags.svg} alt="countryImage" />
            {name.official}
            <span className='row'>
              <b className="desc">Population</b>
              {population}
            </span>
            <span className='row'>
              <b className="desc">Region</b>
              {continents}
            </span>
            <span className='row'>
              <b className="desc">Capital</b>
              {capital}
            </span>

            <br />
            {capital}

          </div>

        )
      })}
    </>
  );
}
export default Countries;
