import React from 'react'


const Content = props => {
  let parts = props.course.parts;
  return (
    <div>
      {
        parts.map(it => (
          <div>
            <p style={{ color: 'green' }}>Course Name : {it.name}</p>
            <p style={{ color: 'blue' }}>Number of Excercises : {it.exercises}</p>
          </div>
        ))
      }
    </div>
  )
}


export default Content
