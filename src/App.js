
import { useState } from 'react';
import './App.css';
import ComponentChildren from './components/ComponentChildren';
import Destruction from './components/Destruction';
import FragmentExemplo from './components/FragmentExemplo';
import ImprimeMensagem from './components/ImprimeMensagem';
import MostraImagens from './components/MostraImagens';
import PassandoFuncaoNaProp from './components/PassandoFuncaoNaProp';
import SetaMensagem from './components/SetaMensagem';
function App() {
  const lista = [
    {nome:"uno",ano:2005, newCar:false},
    {nome:"fusca",ano:2008, newCar:false},
    {nome:"fiat",ano:2001, newCar:true}
  ]

  const [lista2] = useState([
    {nome:"exemplo1",ano:2005, newCar:false},
    {nome:"exemplo2",ano:2008, newCar:false},
    {nome:"exemplo3",ano:2001, newCar:true}
  ])
  const exemploFuncao = ()=> {
    lista2.map((item) => {item.ano = item.ano + 1})
    console.log(lista2)
  }
  const renderizacaoEmLoop = ()=> {
    return lista.map( (item, index) => (<Destruction nome={item.nome} ano={item.ano} newCar={item.newCar}  key={index}/>))
  }

  const [message, setMessage] = useState("")

  const alterarMensagem = (mensagem)=> {
    setMessage(mensagem)
  }
  return (
    <div className="App">
      <h1>Avancando no React!</h1>
      {/* diferentes formas de mostrar uma imagem*/}
      <MostraImagens />
       {/* primeira forma de reatilizar o componente*/}
      <Destruction nome={"carro1"} ano={2019} newCar={false}/>
      <Destruction nome={"carro2"} ano={2012} newCar={false}/>
      <Destruction nome={"carro3"} ano={2010} newCar={false}/>
      <Destruction nome={"carro4"} ano={2022} newCar={true}/>
      {/*segunda forma de reutilizar o componente, utilizando o loop*/}
      <p>Utilizando o reaproventamento com loop</p>
      {renderizacaoEmLoop()}

      {/*utilizando o fragmente*/}
      <FragmentExemplo propFragmente={'fragmente de propriedade'}/>

      {/* componente com prop children*/}
      <ComponentChildren titulo={"the black wolf"}>o lobo era escuro como a noite, com olhos claros como a lua</ComponentChildren>

      {/* passando funcoes como propriedades de um componente*/}
      <PassandoFuncaoNaProp somaUm={exemploFuncao} />
      <br />
      {/* state lift */}
      {/* imprime a mensagem */}
      <SetaMensagem alterarMensagem={alterarMensagem} />
      <ImprimeMensagem mensagem={message}/>
    
    </div>
  );
}

export default App;
