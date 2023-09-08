import './Home.css'
import Cabecalho from "./componentes/cabecalho"
import Rodape from './componentes/rodape'
import ContainerHome from './componentes/componentesPesonalizados/homeContainer'

export default function Home() {

  return (
    <>
    <div id="grid-container">
      <div id="grid-item1">
        <Cabecalho/>
        </div>
        <div id="grid-item2">
        <ContainerHome/>
        </div>
        <div class="rodape">
          <Rodape/>
        </div>
      </div>
    </>
  )
}