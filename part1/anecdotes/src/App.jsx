import { useState } from 'react'

const randomIntFromInterval = (min, max, selected) => { 
  const val = Math.floor(Math.random() * (max - min + 1) + min)
  if (val != selected){
    return val 
  }
  return randomIntFromInterval(min, max, selected)
}

const MostVoted = ({mostVoted, votes, anecdotes}) =>{

  if (votes[mostVoted] === 0){
    return (
    <>
      <h1>Most Voted:</h1>
      <p>No votes Yet</p>
    </>
    )
  }

  return (
  <>
    <h1>Most Voted: </h1>
    <p>{anecdotes[mostVoted]}</p>
  </>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}> {text} <br/></button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const handleNextClick = () => {
    setSelected(randomIntFromInterval(0, anecdotes.length - 1, selected)) 
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    if (copy[selected] > copy[mostVoted])
    {
      setMostVoted(selected)
    }
    setVotes(copy)
  }

  return (
  <>
    <h1>Anecdotes: </h1>
    <p>{anecdotes[selected]}</p>
    <Button onClick={handleVote} text={"vote"}/>
    <Button onClick={handleNextClick} text={"Next"}/>
    <p>Votes: {votes[selected]}</p>
    <MostVoted mostVoted={mostVoted} votes={votes} anecdotes={anecdotes}/>
  </>
  )
}

export default App
