import React, { useState } from 'react'

const RenderizacaoCondicionalIFANDELSE = () => {
    const [name, setName] = useState("eduardo")

    const mudarNome = () => {
        setName("dudu")
    }
  return (
    <div>
        <h1>If e Else ternario</h1>
        {name === "dudu" ? (<h3>o nome é dudu</h3>) : (<h3>o nome não é dudu</h3>)}

        <button onClick={mudarNome}>Clique aqui</button>
    </div>
  )
}

export default RenderizacaoCondicionalIFANDELSE