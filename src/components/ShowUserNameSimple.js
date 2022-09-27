import React from 'react'

const ShowUserNameSimple = (props) => {
  return (
    <div>
      <h2>Nome do usuario: {props.user.name}</h2>
      <h2>idade do usuario: {props.user.age}</h2>
    </div>
  )
}

export default ShowUserNameSimple