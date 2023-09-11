import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import logoImage from '../img/logo.png'
import './QmSomos.css'

export default function QuemSomos(){
    return(
        <>
        <div id="body">
        <div className="container">
            <h2>Quem somos?</h2>
            <p class="txtPadr">Somos a empresa <txt class="dC">Dream Clean</txt>, nosso foco é manter a cidade mais limpa
            fornecendo sistemas de bueiros inteligentes com o foco de diminuir 
                as enchentes nas grandes metropoles, tornando as cidades mais limpas e fornecendo uma vida
                melhor e mais saudável para todos.</p>
                <img src={logoImage} alt="logo"/> 
        </div>
        </div>
        </>
    )
}