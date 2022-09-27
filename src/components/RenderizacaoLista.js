import React from 'react'
import { useState } from 'react'
const RenderizacaoLista = () => {
    const [list] = useState(["eduardo", "marilsa"])
    const [users, setUser] = useState([
        {id: 1, name: "usuario1", age: 22},
        {id: 2, name: "usuario2", age: 23},
        {id: 3, name: "usuario3", age: 24}
    ])

    const deletar = () => {
        const number = Math.floor(Math.random() * 4)
        console.log(number)
        setUser((prevUsers) => {
            return prevUsers.filter((user) => number !== user.id)
        })
        
    }

  return (
    <div>
        <h1>Renderizando uma Lista</h1>
        <ul>
            {list.map((item, indice) => (
                <li key={indice}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((usuario) => (
                <li key={usuario.id}>Nome: {usuario.name}, Idade: {usuario.age}</li>
            ))}
        </ul>
        <button onClick={deletar}>delete random user</button>
    </div>
  )
}

export default RenderizacaoLista