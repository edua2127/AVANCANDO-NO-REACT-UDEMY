import React from 'react'

const FragmentExemplo = ({propFragmente}) => {
  return (
    <>
        <h1>tag pai 1</h1>
        <h2>tag pai 2</h2>
        <h2>{propFragmente}</h2>
    </>
  )
}

export default FragmentExemplo