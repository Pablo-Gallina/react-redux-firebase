import React from 'react'

const ContenidoTabla = ({ data }) => {
    const {pago, fecha} = data;

    const date = fecha.seconds ? fecha.toDate() : '';

    const fechaFormato = fecha.seconds ? date.toLocaleDateString() : fecha;

    return (
        <>
           
            <tr>
                <td>{fechaFormato}</td>
                <td>{pago}</td>
                <td>Eliminar</td>
            </tr>
        </>
    )
}

export default ContenidoTabla
