
import  Imagem  from '/development/projetos-em-react/P_AVANCANDO_NO_REACT/avancado_no_react/src/imagem/imagem.jpg'

const MostraImagens = () => {
  return (
    <div>
        <h2>Renderizacao de imagem</h2>
        <p>tipo 1</p>
        {/* mostrar imagem que esta em public*/}
        <img src="/imagem1.jpg" alt="coxinha" />

        <p>tipo 2</p>
        {/* mostrar imagem que esta em src/assets*/}
        <img src={Imagem} alt="suco verde" />
    </div>
  )
}
export default MostraImagens