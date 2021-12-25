import { types } from "../types/types";

const initialState = {
    nomina: []
}

export const appReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.nominaAdd:
            return {
                ...state,
                nomina: [...state.nomina, action.payload]
            };

        case types.nominaRead:
            return {
                ...state,
                nomina: action.payload
            }
        
        case types.nominaDelete:
            return {
                ...state,
                nomina: state.nomina.filter( nomina => {
                    return nomina.id !== action.payload
                })
            }
        
        case types.nominaClean:
            return {
                ...state,
                initialState
            }

        default:
            return state;
    }
}