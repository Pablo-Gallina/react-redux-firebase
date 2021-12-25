import React from 'react'
import TBody from './TBody'

const Table = ({ data }) => {
    return (
        <>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Fecha Pago</th>
                        <th>Cantidad a pagar</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                
                <TBody  data={data} />
            </table>   
        </>
    )
}

export default Table
