import React from "react";
import logo from '../assets/LOGO.png'

function Header (){
    return (
        <header>
            <div className="interface">
                <div className="logo">
                    <a href="">
                        <img src={logo} alt="Logo de Lindemberg Lima"/>
                    </a>
             </div>
                <nav className="desktop-menu">
                    <ul>
                        <li><a class="active" href="#">Inicio</a></li>
                        <li><a href="/Pages/curriculo.html">Curriculo</a></li>
                        <li><a href="/Pages/porfolio.html">Portfólio</a></li>
                        <li><a href="/Pages/contato.html">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        
    )
}
export default Header