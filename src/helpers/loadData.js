import { db } from '../firebase/config'

export const loadData = async uid => {
    //Acceder a la coleccion, segun el uid
    const res = await db.collection(`${uid}/datos/nomina`).get();
    const data = []
    console.log(res);

    return data;
}