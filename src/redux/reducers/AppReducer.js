import { types } from "../types/types";

const initialState = {
    nomina: []
}

export const appReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.nominaAdd:
            return {};

        case types.nominaRead:
            return {
                ...state,
                nomina: action.payload
            }

        default:
            return state;
    }
}