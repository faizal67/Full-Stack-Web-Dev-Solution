import React from 'react'


const Content = props => {
  return (
    <div>
        <p style={{color:'green'}}>Course Name : {props.name}</p>
        <p style={{color:'blue'}}>Number of Excercises : {props.exercises}</p>
    </div>
  )
}


export default Content
