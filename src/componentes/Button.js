import React from 'react'
import css from './button.module.css'

export default function Button({onClick,classN,value}) {
    return (
       
        <button onClick={onClick} className={`${classN} ${css.btn}`}>
        {value}
        </button>
       
    )
}
