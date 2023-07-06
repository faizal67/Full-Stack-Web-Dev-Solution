import React from 'react'

const Total = (props) => {
  let sum =0;
  props.course.parts.forEach(element => {
    sum += element.exercises;
  });
  return (
    <div>
      <p style={{color:'red'}}>Total number of Excercises are: {sum}</p>
    </div>
  )
}

export default Total
