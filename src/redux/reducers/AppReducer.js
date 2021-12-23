import { types } from "../types/types";

export const appReducer = (state={}, action) => {
    switch (action.type) {
        case types.nominaAdd:
            return {};

        // case types.logout:
        //     return {}
    
        default:
            return state;
    }
}