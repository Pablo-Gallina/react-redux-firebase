import React from 'react'

const ContenidoTabla = ({ data }) => {
    const {pago, fecha} = data
    const date = fecha.toDate();

    const fechaFormato = date.toLocaleDateString() //`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
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
