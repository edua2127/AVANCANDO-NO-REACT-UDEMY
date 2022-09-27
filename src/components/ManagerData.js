import { useState } from "react"


export const ManagerData = () => {
    const[number, setNumber] = useState(10)
    const aumentarValorNumber = () => {
        let temp = number
        setNumber(temp=temp + 1)
    }
  return (
    <div>
        <h1>valor da variavel: {number}</h1>
        <button onClick={aumentarValorNumber}>Aumentar valor da variavel reactiva</button>
    </div>
  )
}
