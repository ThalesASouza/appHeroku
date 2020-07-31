import React from 'react'
import css from './cabecalho.module.css';

export default function Cabecalho() {
    return (
        <ul className={css.ul}>
            <li><a href="/">Home</a></li>
            <li><a href="/Estatisticas">Estatisticas</a></li>
        </ul>
    )
}


