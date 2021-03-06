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
           
            <tr className="animate__animated animate__fadeInUp ">
                <td>{fechaFormato}</td>
                <td>Q.{pago}</td>
                <td> <button className="btn btn-outline-danger" onClick={handelEliminar}>eliminar</button> </td>
            </tr>
        </>
    )
}

export default ContenidoTabla
