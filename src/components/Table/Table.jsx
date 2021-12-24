import React from 'react'
import TBody from './TBody'

const Table = ({ data }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Cantidad</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                
                <TBody  data={data} />
            </table>   
        </>
    )
}

export default Table
