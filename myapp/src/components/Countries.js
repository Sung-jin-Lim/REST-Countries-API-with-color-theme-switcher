import React, { useState, useEffect } from 'react';





const Countries = (props) => {
  //  create function that calls the api and returns the data whenever props.region changes



  const [countries, setCountries] = useState([]);
  console.log(countries)








  useEffect(() => {
    if (props.region === 'All') {
      console.log(`props.region=== all`)

      fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

      // console.log(countries)



    } else {
      console.log(`props.region=== ${props.region}`)

      fetch(`https://restcountries.com/v3.1/region/${props.region}`)
        .then(res => res.json())
        .then(data => setCountries(data))
    }
  }, [
    props.region // Research later why this makes the whole thing work!!!!!!
  ])


  // adds in separation commas:
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // check region

  return (
    <>


      {
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
