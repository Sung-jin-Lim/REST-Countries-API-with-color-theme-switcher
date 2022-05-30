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

  return (
    <>
      {countries.map((country) => {
        const { id, name, capital, continents, flags } = country
        return (
          <div className='card' key={id}>
            <img src={flags.png} alt="countryImage" />
            {name.official}
          </div>

        )
      })}
    </>
  );
}
export default Countries;
