const Header = (props) =>{
  return(
    <h1> {props.course} </h1>
  )
}

const Part = (props) =>{
  return(
    <>
      <p>
        {props.part_name} {props.excercise_count}
      </p>
    </>
  )
}

const Content = (props) =>{

  return(
    <>
      <Part part_name={props.part1} excercise_count={props.exercises1} />
      <Part part_name={props.part2} excercise_count={props.exercises2} />
      <Part part_name={props.part3} excercise_count={props.exercises3} />
    </>
  )
}

const Total = (props) =>{
  const total = props.exercises1 + props.exercises2 + props.exercises3
  return(
    <>
      <p> Number of exercises {total} </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App
