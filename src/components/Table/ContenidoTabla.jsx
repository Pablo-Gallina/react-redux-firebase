import React from 'react'
import { useDispatch } from 'react-redux';
import { eliminarRegistroFirebase } from '../../redux/actions/app';

const ContenidoTabla = ({ data }) => {
    const dispatch = useDispatch()

    const { id, pago, fecha } = data;

    const date = fecha.seconds ? fecha.toDate() : '';

    const fechaFormato = fecha.seconds ? date.toLocaleDateString() : fecha;

    const handelEliminar = () => {
        dispatch(eliminarRegistroFirebase(id));
    }
    return (
        <>
           
            <tr>
                <td>{fechaFormato}</td>
                <td>{pago}</td>
                <td> <button onClick={handelEliminar}>eliminar</button> </td>
            </tr>
        </>
    )
}

export default ContenidoTabla
