import React from 'react'

import { BrowserRouter, link } from 'react-router-dom';

import './Header.css'

export default function Header () {
    return (
        <BrowserRouter >
            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li><link to="/">Nosso Canal</link> </li>

                        <li><link to="#cursos">Cursos</link> </li>
                        <li><link to="#contatos">Contato</link> </li>
                        <li><link to="#parceiros">Parceiros</link> </li>
                        <li><link to="#missao"> Missão</link> </li>
                        <li><link to="#sobre">Sobre</link> </li>
                    </ul>
                </nav>
            </div>
        </BrowserRouter>
    )
};