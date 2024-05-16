import { useState } from 'react'


const Button = ({onClick, text}) => <button onClick={onClick}> {text} <br/></button>

const Display = ({content}) => <div> {content} <br/> </div> 
  
const History = ({allClicks}) => {
  if(allClicks.length === 0)
  {
    return (
      <Display content="The app is used by pressing buttons" />
    )
  }
  return (
    <Display content={allClicks.join(" ")} />
  )
}
const App = () => {
  const [right, setRight] = useState(0)
  const [left, setLeft] = useState(0)
  const [allClicks, setClick] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setClick(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setClick(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <>
      <Display content = {"Right: "+right}/>
      <Display content = {"Left: "+left}/>
      <Button onClick={handleRightClick} text="Right" />
      <Button onClick={handleLeftClick} text="Left"/>
      <History allClicks={allClicks}/>
      <Display content={"Total: "+total}/>
    </>
  )

}
export default App