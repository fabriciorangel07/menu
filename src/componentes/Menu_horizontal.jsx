import React from 'react';
import './App';
import './Menu_horizontal.css';

export default function Menu() {
    return (
        <div>
            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <a href = "#inicio"> Nosso Canal </a> </li>
                        <li> <a href = "#cursos"> Cursos </a> </li>
                        <li> <a href = "#contatos"> Contatos </a> </li>
                        <li> <a href = "#parceiros"> Parceiros </a> </li>
                        <li> <a href = "#missao"> Missão </a> </li>
                        <li> <a href = "#sobre"> Sobre </a> </li>                                                                                                                        
                    </ul>
                </nav>

                <section id="inicio">
                    <h1> Início </h1>
                </section>

                <section id="cursos">
                    <h1> Cursos </h1>
                </section>

                <section id="contatos">
                    <h1> Contatos </h1>
                </section>

                <section id="parceiros">
                    <h1> Parceiros </h1>
                </section>

                <section id="missao">
                    <h1> Missão </h1>
                </section>

                <section id="sobre">
                    <h1> Sobre </h1>
                </section>

                <a className =  "Irtopo" href = ".menu">Topo</a>
                <a className =  "irInicio" href = "#nossocanal">Nosso Canal</a>
                <a className =  "irCursos" href = "#cursos">Cursos</a>
                <a className =  "irContatos" href = "#contatos">Contatos</a>
                <a className =  "irParceiros" href = "#parceiros">Parceiros</a>
                <a className =  "irMissao" href = "#missao">Missão</a>
                <a className =  "irTopo" href = "#sobre">Sobre</a>

                <footer>
                    <h2>Rodape</h2>
                </footer>

            </div>
        </div>
    )
}