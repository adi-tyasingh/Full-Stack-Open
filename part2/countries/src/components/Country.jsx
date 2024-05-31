import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({city}) => {
    const [weather, setWeather] = useState(null)
    const api_key = import.meta.env.weather_api_key

    useEffect(() =>
    {
        axios
        .get(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`)
        .then(response => {
            setWeather(response.data)
            console.log(response.data)
        })
    },[])  

    if (!weather){
        return (
            <p>Loading...</p>
        )
    }

    return (
        <>
            <h3>Weather: </h3>
            <div>
                tempreature : {weather.current.temp_c} <br/>
                wind : {weather.current.wind_kph} <br/>
                condition: {weather.current.condition.text} <br/>
                <img src={`https:${weather.current.condition.icon}`} alt="weather.current.condition.text" />
            </div>
        </>
    )
}

const Country = ({nation}) => {
  const [country, setCountry] = useState(null)

  useEffect(() =>
  {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${nation.toLowerCase().trim()}`)
      .then(response => {
        setCountry(response.data)
        console.log(response.data)
      })
  },[])

  if(!country){
    return(
      <p>loading...</p>
    )
  }

  return (
    <>
      <h1>{country.name.common}</h1>
      <h2>{country.name.official}</h2>
      
      <div>
        <h4>capital(s) :</h4>
        <ul>
          {country.capital.map( name => <li key={name}>{name}</li>  )}
        </ul>
      </div>

      <div>
        <h4>Languages(s) :</h4>
        <ul>
          {Object.keys(country.languages).map( key => <li key={key}>{country.languages[key]}</li>  )}
        </ul>
      </div>

      <img border='5px' src={country.flags.png} alt={country.flags.alt} /> <br/>

      <Weather city={country.capital[0]}/>

    </>
  )
}

export default Country