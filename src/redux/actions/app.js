import { db } from "../../firebase/config";
import { types } from "../types/types";

export const crearRegistro = (pago) => {
    return async (dispatch, getState) => {
        // Capturando el uid del usuario logueado
        const { uid } = getState().auth;

        const datos = {
            fecha: new Date().toLocaleDateString(),
            pago
        }

        const refer = await db.collection(`${uid}/datos/nomina`).add(datos);

        const id = await refer.id;

        const newData = {
            ...datos,
            id,
        }

        dispatch(crear(newData));

    }
}

export const leerDatos = datos => {
    return {
        type: types.nominaRead,
        payload: datos
    }
}

export const crear = datos => {
    return {
        type: types.nominaAdd,
        payload: datos
    }
}