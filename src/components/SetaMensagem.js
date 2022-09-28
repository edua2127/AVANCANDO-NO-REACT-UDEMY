import React from 'react'

const SetaMensagem = ({alterarMensagem}) => {
  return (
    <div>
        
        <button onClick={()=> alterarMensagem("alteracao1")}>opcao de alteracao 1</button> <br />
        <button onClick={()=> alterarMensagem("alteracao2")}>opcao de alteracao 2</button> <br />
        <button onClick={()=> alterarMensagem("alteracao3")}>opcao de alteracao 3</button>
    </div>
  )
}

export default SetaMensagem