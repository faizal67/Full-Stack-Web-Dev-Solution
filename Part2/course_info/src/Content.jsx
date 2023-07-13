import React from 'react'


const Content = props => {
  let parts = props.course.parts;
  return (
    <div>
      {
        parts.map(
          it => (<li key={it.id} >{it.name} {it.exercises}</li>
          ))
      }
    </div>
  )
}


export default Content
