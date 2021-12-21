import React from 'react'

const InputIcon = ({id, textoLabel, inputClases, contClases, placeholder, icono,onChange, type, value, typPass=false}) => {
    return (
        <>
            <label htmlFor={id}>{textoLabel}</label>
            <div className={contClases}>
                <input className={inputClases} onChange={onChange} id={id} value={value} name={id} type={type} placeholder={placeholder}/>
                <i className={icono}></i>
                
                {typPass && <>
                    <span className="fas fa-eye pass"></span>
                    <span className="fas fa-eye-slash pass hidden"></span>
                </>}
            </div>
        </>
    )
}

export default InputIcon
