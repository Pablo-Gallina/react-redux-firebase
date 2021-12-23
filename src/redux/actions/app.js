import { db } from "../../firebase/config";

export const crearRegistro = (pago) => {
    return async (dispatch, getState) => {
        // Capturando el uid del usuario logueado
        const { uid } = getState().auth;

        const datos = {
            fecha: new Date(),
            pago
        }

        const refer = await db.collection(`${uid}/datos/nomina`).add(datos);
    }
}