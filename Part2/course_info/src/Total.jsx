import React from 'react'

const Total = (props) => {
  let sum = props.course.parts.reduce((it,next) => it+=next.exercises,0);
  return (
      <p style={{color:'red'}}>Total number of Excercises are: {sum}</p>
  )
}

export default Total
