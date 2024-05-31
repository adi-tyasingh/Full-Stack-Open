const Header = ({course}) =><h2> {course.name} </h2>


const Part = ({part}) =><p>{part.name}: {part.exercises}</p>


const Content = ({course}) =>{
  return(
    <>
      {course.parts.map(part => <Part part={part} key={part.id}/>)}
    </>
  )
}

const Total = ({course}) =>{
  const total = course.parts.reduce((val, part) => val + part.exercises, 0)
  return(
    <>
      <h4> Number of exercises: {total} </h4>
    </>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

export default Course