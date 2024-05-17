import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}> {text} <br/></button>

const Display = ({content}) => <div> {content} <br/> </div> 

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad, total}) =>{
  
  const average = () => ((good*1) + (bad*-1))/total

  const positive = () => (good * 100)/total + "%"

  if (total === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <Display content="No Feedback Yet."/>
      </>
    )
  }
  
  return (
    <>
      <h1> Statistics </h1>
      <table>
        <tbody>
          <StatisticLine text="Good:" value={good}/>
          <StatisticLine text="Neutral:" value={neutral}/>
          <StatisticLine text="Bad:"  value={bad}/>
          <StatisticLine text="Total:" value={total}/>
          <StatisticLine text="Average:" value={average()}/>
          <StatisticLine text="Positive:"value={positive()}/>
        </tbody>
      </table>
      
      
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
  }

  

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />

      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>

    </>
  )
}

export default App
