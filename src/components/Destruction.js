import React from 'react'

const Destruction = ({nome, ano, newCar}) => {
  return (
    <div>
        <h1>Detalhes do carro</h1>
        <ul>
            <li>Nome do Carro: { nome }</li>
            <li>Ano do Carro: { ano }</li>
            {newCar && <li>Carro é novo</li>}
        </ul>
    </div>
  )
}

export default Destruction