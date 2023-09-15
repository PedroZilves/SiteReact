import './cabecalho.css'
import React from 'react';
import logoImage from '../img/logo.png'
import { Link } from "react-router-dom"
import {menu} from "../js/menu"

export default function Cabecalho(){
    const handleClick = () => {
        menu();
    };

    return(
    <>
    <div id="menu" class="menu">
        <ul class="itens">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/QmSomos'>Quem Somos</Link></li>
            <li><Link to='/Monitoramento'>Monitoramento de área</Link></li>
            <li><a href="#">Projeto</a></li> 
            <li><a href="#">Como o lixo é descartado</a></li>
            <li><a href="#">Contato</a></li>
            <li><Link to='/Login'>Login</Link></li> 
        </ul>        
        <div class="menu-btn" onClick={handleClick}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>
 </>

 )
}
