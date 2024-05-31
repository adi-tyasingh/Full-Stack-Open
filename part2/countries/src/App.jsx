import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'

const App = () => {
  const [searchCountry, setSearchCountry] = useState('')
  const [countryList, setCountryList] = useState([])

  const hook = () => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountryList(response.data.map(obj => obj.name.common))
      })
  }

  useEffect(hook, [])

  const searchCountries = (event) => {
    setSearchCountry(event.target.value)
  }

  const toDisplay = countryList.filter((country) => country.toLowerCase().includes(searchCountry.toLowerCase()))


  return (
    <>
      <h1>Countries:</h1>
      <div>
        Search <input type="text" value={searchCountry} onChange={searchCountries}  />
      </div>



      <div>
        <Display toDisplay={toDisplay}/> 
      </div>

    </>
  )
}

export default App
