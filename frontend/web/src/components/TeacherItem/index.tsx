import React from 'react';

import whatssApp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/56719166?s=460&u=d8a94923f3a5d485110158976b1bae998ed3f26c&v=4" alt="João Gabriel"/>
                <div>
                    <strong>João Gabriel Caetano</strong>
                    <span>Matemática</span>
                </div>
            </header>
            
            <p>
            Entusiasta das melhores tecnologias de matemática avançada.
            <br/><br/>
            Apaixonado por calcular coisas em laboratório e por mudar a vida das pessoas através das exatas. Mais de 200.000 pessoas já passaram por uma de minhas expressõas numéricas.
            </p>

            <footer>
                <p>Preço/hora
                <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatssApp} alt="WhatssApp"/>
                    Entrar em contato.
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;