import './Menu_horizontal.css';
import React from "react";

export default function Menu() {
    return (
        <div>
           <div className="menu">
            <nav className= "navMenu">
                <ul>
                    <li><a href="#inicio">Nosso Canal</a> </li>
                    <li><a href="#cursos">Cursos</a> </li>
                    <li><a href="#contatos">Contato</a> </li>
                    <li><a href="#parceiros">Parceiros</a> </li>
                    <li><a href="#missao"> Missão</a> </li>
                    <li><a href="#sobre">Sobre</a> </li>

                </ul>
            </nav>
          </div>
                    <section id="inicio">
                    <h1>Inicio</h1>
                    </section>

                    <section id="cursos">
                    <h1>Cursos</h1>
                    </section>

                    <section id="contatos">
                    <h1>Contatos</h1>
                    </section>

                    <section id="parceiros">
                    <h1>Parceiros</h1>
                    </section>

                    <section id="missao">
                    <h1>Missão</h1>
                    </section>

                    <section id="sobre">
                    <h1>Sobre</h1>
                    </section>

           <a href=".menu" className="irtopo">Topo</a>
           <a href="#inicio" className="irinicio">Nosso Canal</a>
           <a href="#cursos" className="ircursos">Cursos</a>
           <a href="#contatos" className="ircontato">Contato</a>
           <a href="#parceiros" className="irparceiros">Parceiros</a>
           <a href="#missao" className="irmissao">Missão</a>
           <a href="#sobre" className="irsobre">Sobre</a>

           <footer>
                <h1>Rodape</h1>            
            </footer>
 
        </div>
    )
}