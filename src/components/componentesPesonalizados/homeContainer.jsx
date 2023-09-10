import imgLogo from '../../img/logo.png'
import './homeContainer.css'

export default function ContainerHome(){
    return (
        <div className="containerMain">
             <img src={imgLogo} alt="logo"/>
            <h1 class="dDiv">Venha conhecer a Dream Clean</h1>
            <p class="dDiv">O futuro te espera!</p>
        </div>
    )
}