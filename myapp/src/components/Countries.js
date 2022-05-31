import React, { useState, useEffect } from 'react';




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
  // what does this do?
  useEffect(() => {


    fetchItems()
  }, [])

  // random two numbers so that slice different section every load
  // the two numbers must always be 5 numbers apart

  const random2 = Math.floor(Math.random() * countries.length) // do I have to bring this to the higher level component?
  const random = random2 - 8;

  // adds in seperation commas:
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      {countries.slice(random, random2).map((country) => {
        const { id, name, capital, continents, flags, population } = country
        return (
          <div className='card' key={id}>
            <img src={flags.svg} alt="countryImage" />
            <div className='card-info'>
              <div className="title">
                {name.official}
              </div>
              <span className='row'>
                <b className="desc">Population: </b>
                {numberWithCommas(population)}
              </span>
              <span className='row'>
                <b className="desc">Region: </b>
                {continents}
              </span>
              <span className='row'>
                <b className="desc">Capital:</b>
                {capital}
              </span>


            </div>
          </div>

        )
      })}
    </>
  );
}
export default Countries;
