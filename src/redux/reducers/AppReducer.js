import { types } from "../types/types";

export const appReducer = (state={}, action) => {
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