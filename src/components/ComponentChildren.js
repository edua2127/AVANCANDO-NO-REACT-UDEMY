import React from 'react'

const ComponentChildren = ({titulo, children}) => {
  return (
    <div>
        <h1>{titulo}</h1>
        <p>{children}</p>
    </div>
  )
}

export default ComponentChildren