import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { crearRegistro } from '../../redux/actions/app'

import Button from '../Button/Button'

const Form = () => {
    const dispatch = useDispatch();

    const [pago, setPago] = useState({
        precioHora: 0,
        horas: 0
    });

    const { precioHora, horas } = pago;

    const handleAgregar = () => {
        const final = precioHora * horas;
        dispatch(crearRegistro(final))
    }

    const handleChange = e => {
        const cantidad = e.target.value;
        setPago({
            ...pago,
            [e.target.name]: cantidad ? parseFloat(cantidad) : cantidad
        }); 
    }

    return (
        <>

            <form>
                <input type="text" name="horas" id="" value={horas} onChange={handleChange} placeholder="ingresa cantidad por pagar hora"/>

                <input type="text" name="precioHora" id="" value={precioHora} onChange={handleChange} placeholder="ingresa horas"/>
            </form>

            <Button clases="btn btn-primary" texto="Agregar" onClick={handleAgregar} />
        </>
    )
}

export default Form
