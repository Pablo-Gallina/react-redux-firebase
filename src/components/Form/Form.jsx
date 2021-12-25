import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { crearRegistro } from '../../redux/actions/app'

import Button from '../Button/Button'
import InputIcon from '../InputIcon/InputIcon'

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
            <div className="modal-body">
                <form className="formulario">
                    <InputIcon id="horas" textoLabel="Ingrese las horas trabajadas" contClases="input-icon mb-2" inputClases="w-100" placeholder="Horas trabajadas" icono="fas fa-clock" onChange={handleChange} type="number" value={horas} />
                    <InputIcon id="precioHora" textoLabel="Ingrese el pago por hora" contClases="input-icon mb-2" inputClases="w-100" placeholder="Pago por hora" icono="fas fa-money-bill-wave" onChange={handleChange} type="number" value={precioHora} />
                </form>
            </div>

            <div className="modal-footer">
                <button type="button" className="button btn-primary small outline" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" className="button btn-primary small" data-bs-dismiss="modal" onClick={handleAgregar}>Agregar y calcular</button>
            </div>
            
        </>
    )
}

export default Form
