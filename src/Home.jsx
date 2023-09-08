import './Home.css'
import Cabecalho from "./componentes/cabecalho"
import Rodape from './componentes/rodape'

export default function Home() {

  return (
    <>
    <div id="grid-container">
      <div id="grid-item1">
        <Cabecalho/>
        </div>
        <div id="grid-item2">
        dasdasdasdasd
        </div>
        <div id="grid-item3">
          dasdasdasdasdas
        </div>
        <div class="rodape">
          <Rodape/>
        </div>
      </div>
    </>
  )
}