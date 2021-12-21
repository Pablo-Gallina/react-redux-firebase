import React from 'react'

const Button = ({type="button", clases, icono, texto, onClick }) => {
    return (
        <button type={type} className={clases} onClick={onClick}>
            {icono && <i className={icono}></i>}
            {texto}
        </button>
    )
}

export default Button
