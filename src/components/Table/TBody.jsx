import React from 'react'
import ContenidoTabla from './ContenidoTabla'

const TBody = ({ data }) => {

    return (
        <tbody>

            {data.map(_data => <ContenidoTabla key={_data.id} data={_data}/>)}
            
            {/* <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr> */}
        </tbody>
    )
}

export default TBody
