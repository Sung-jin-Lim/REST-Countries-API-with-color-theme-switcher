import React, { useState, useEffect } from 'react';





const Countries = (props) => {
  //  create function that calls the api and returns the data whenever props.region changes
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (props.region === 'All') {
      console.log(`props.region=== all`)

      fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    } else {
      console.log(`props.region=== ${props.region}`)

      fetch(`https://restcountries.com/v3.1/region/${props.region}`)
        .then(res => res.json())
        .then(data => setCountries(data))
    }
  }, [
    props.region // Research later why this makes the whole thing work!!!!!!
  ])


  // set countries array as only countries that contains the inputValue in their name
  const filteredCountries = countries.filter(country => ((country.name.official).toLowerCase()).includes((props.inputValue).toLowerCase()))

  // const filteredCountries = countries.filter(country => (country.name.official).includes('Korea'))
  // const filteredCountries = countries.filter(country => (country.name.official === 'Republic of Korea'))
  console.log(filteredCountries)

  // if (filteredCountries.length > 0) {
  //   setCountries(filteredCountries)
  // }


  // adds in separation commas:
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // check region

  return (
    <>


      {

        // as long as inputValue is not empty, map the filteredCountries array        
        countries.map((country) => {
          const { name, capital, region, flags, population,
          } = country
          return (
            <div className='card' key={name.official}>
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
                  {region}
                </span>
                <span className='row'>
                  <b className="desc">Capital:</b>
                  {capital}
                </span>


              </div>
            </div>

          )
        })

      }
    </>
  );
}





export default Countries;
