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
                    <h2>Nosso Canal</h2>

                        <aside className="aside">
                            <a href="#inicio" id="inicio2"> Nosso Canal </a>
                            <a href="#cursos" id="cursos2"> Cursos </a>
                            <a href="#contatos" id="contatos2"> Contatos </a>
                            <a href="#parceiros" id="parceiros2"> Parceiros </a>
                            <a href="#missao" id="missao2"> Missão </a>
                            <a href="#sobre" id="sobre2"> Sobre </a>
                        </aside>
                    </section>

                    <section id="cursos">
                    <h2>Cursos</h2>
                    </section>

                    <section id="contatos">
                    <h2>Contatos</h2>
                    </section>

                    <section id="parceiros">
                    <h2>Parceiros</h2>
                    </section>

                    <section id="missao">
                    <h2>Missão</h2>
                    </section>

                    <section id="sobre">
                    <h2>Sobre</h2>
                    </section>

           <a href="#menu" className="irtopo">Topo</a>
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