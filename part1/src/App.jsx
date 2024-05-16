import { useState } from 'react'


const Button = ({onClick, text}) => <button onClick={onClick}> {text} </button>

const Display = ({counter}) => <div> {counter} </div>
  

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const incrementCounter = () => setCounter(counter + 1)
  
  const resetCounter = () => setCounter(0)

  const decrementCounter = () => setCounter(counter - 1)

  return (
    <>
      <Display counter={counter} />
      <Button onClick={incrementCounter} text="Plus" />
      <Button onClick={resetCounter} text="reset" />
      <Button onClick={decrementCounter} text="minus" />
    </>
  )

}
export default App