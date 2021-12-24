import { db } from '../firebase/config'

export const loadData = async uid => {
    //Acceder a la coleccion, segun el uid
    const res = await db.collection(`${uid}/datos/nomina`).get();
    const data = []
    console.log(res);
    
    // recorrer la data, forEach es una funcion propia de firebase
    res.forEach( nomina => {
        const nominaData = nomina.data()
        
        //Agregar la data al array
        data.push({
            id: nomina.id,
            ...nominaData
        })

        // console.log(data);
    })

    return data;
}