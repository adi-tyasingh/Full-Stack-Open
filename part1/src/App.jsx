import { useState } from 'react'

const Hello = (props) =>{
  console.log(props)
  return(
    <div>
      <p>
        {props.name}
      </p>
      <p>
        {props.age}
      </p>
    </div>
  )
}

const App = ()=>{
  const a = 5
  const b = 10
  const now = new Date() 

  console.log(a,b,a+b, now)
  return (
    <div>
      <p>Greetings</p>
      <Hello name='george' age={10+15} />
      <Hello name='kyooti' age={2+15} />
    </div>
  )
}

export default App
