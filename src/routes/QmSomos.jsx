import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import logoImage from '../img/logo.png'
import '../routes/QmSomos.css'
import Alagamento from '../img/alagamento.png'
import Alagamento2 from '../img/alagamento2.jpg'
import Alagamento3 from '../img/alagamento3.jpg'


export default function QuemSomos(){
    return(
        <>
        <div className="containerGrid">
        <div className="containerQmSomos">
            <h2>Quem somos?</h2>
            <p className="txtPadr">Somos a empresa <txt className="dC">Dream Clean</txt>, nosso foco é manter a cidade mais limpa
            fornecendo sistemas de bueiros inteligentes com o foco de diminuir 
                as enchentes nas grandes metropoles, tornando as cidades mais limpas e fornecendo uma vida
                melhor e mais saudável para todos.</p>
                <img src={logoImage} alt="logo"/> 
        </div>
        <div className="maisQmSomos">
            <h2 className="umProblema">Um problema pouco visto:</h2>
            <p className="txtPadr2">A Dream Clean, inspirada pela 
            apresentação da IBM sobre cidades inteligentes, concentra-se 
            em desenvolvimento sustentável e monitoramento de poluição. Eles 
            destacam um problema frequentemente negligenciado: o descarte 
            inadequado de lixo nas ruas, que afeta o meio ambiente e entope 
            as redes de drenagem. A Dream Clean busca soluções criativas para 
            este desafio vital nas cidades inteligentes.</p>
        </div>
        <div className="divisaoInfo">
                <p className="txtPadr3">
                    Abaixo veja o resutado desde problema:
                </p>
            </div>
        <img id="alagamentoCidade" src={Alagamento} alt="Alagamento em metropole" />
        <img id="alagamento2" src={Alagamento2} alt="Alagamento em sp" />
        <img id="alagamento3" src={Alagamento3} alt="Alagamento em sp" />

        <div className="continuacao">
        <p className="txtPadr">Somos a empresa <txt className="dC">Dream Clean</txt>, nosso foco é manter a cidade mais limpa
            fornecendo sistemas de bueiros inteligentes com o foco de diminuir 
                as enchentes nas grandes metropoles, tornando as cidades mais limpas e fornecendo uma vida
                melhor e mais saudável para todos.</p>
        </div>
        <div className="continuacao2">
            <p className="txtPadr2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Vitae quaerat beatae obcaecati blanditiis itaque quod 
                 repellat voluptatibus quis possimus nobis, ab dolore 
                 eveniet exercitationem sequi sed! Dicta explicabo amet 
                 assumenda.
            </p>
        </div>
        </div>
        </>
    )
}