import React from 'react'
import ContenidoTabla from './ContenidoTabla'

const TBody = ({ data }) => {

    return (
        <tbody>

            {data.map(_data => <ContenidoTabla key={_data.id} data={_data}/>)}
        
        </tbody>
    )
}

export default TBody
