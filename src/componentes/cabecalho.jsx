import './cabecalho.css'
import logoImage from '../img/logo.png'

export default function Cabecalho(){
    return(
    <>
    <div id="menu" class="menu">
    <ul id="itens">
     <li><a href="#">Menu</a></li>
     <li><a href="#">Quem somos</a></li>
     <li><a href="#">Monitoramento de área</a></li>
     <li><a href="#">Projeto</a></li> 
     <li><a href="#">Como o lixo é descartado</a></li>
     <li><a href="#">Contato</a></li>
     <li><a href="#">Login</a></li>
     
    </ul>
 </div>
 </>
 )
}