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
      <Part part_name={props.part1.name} excercise_count={props.part1.exercises} />
      <Part part_name={props.part2.name} excercise_count={props.part2.exercises} />
      <Part part_name={props.part3.name} excercise_count={props.part3.exercises} />
    </>
  )
}

const Total = (props) =>{
  const total = props.part1.exercises + props.part2.exercises + props.part3.exercises
  return(
    <>
      <p> Number of exercises {total} </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name : 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name : 'Using props to pass data',
    exercises : 7
  }

  const part3 = {
    name : 'State of a component',
    exercises: 14 
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App
