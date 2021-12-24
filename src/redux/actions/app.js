import { db } from "../../firebase/config";
import { types } from "../types/types";

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

export const leerDatos = datos => {
    return {
        type: types.nominaRead,
        payload: datos
    }
}