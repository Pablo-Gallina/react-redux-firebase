import React from 'react'

const Button = ({type="button", clases, icono, texto}) => {
    return (
        <button type={type} className={clases}>
            {icono && <i className={icono}></i>}
            {texto}
        </button>
    )
}

export default Button
