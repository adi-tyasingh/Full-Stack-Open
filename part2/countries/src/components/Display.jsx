import Country from "./Country";
import { useState } from 'react'

const Display = ({toDisplay}) => {
  const [selected, setSelected] = useState(null)

  const handleShowClick = (name) => {
    setSelected(name)
  }

  if (selected){
    return(
    <>
      <Country nation={selected}/> <br/>
      <button onClick={()=> setSelected(null)}>Go back to list</button>
    </>
    )
  }

  if (toDisplay.length > 10){
    return(
      <>
        <p>Can you be more specific?</p>
      </>
    )
  }
  else if(toDisplay.length === 1)
  {
    return(
      <>
        <Country nation={toDisplay[0]}/>
      </>
    )
  }
  else if(toDisplay.length == 0)
  {
    return(
        <>
            <h3>No matches found</h3>
        </>
    )
  }
  
  return(
    <>
      <ul>
        { toDisplay.map(country => <li key={country}> {country} <button onClick={()=> handleShowClick(country)}> Show </button></li>)}
      </ul>
    </>
  )

 }

 export default Display