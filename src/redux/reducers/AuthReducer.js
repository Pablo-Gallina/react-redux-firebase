import { types } from "../types/types";

export const authReducer = (state={}, action) => {
    switch (action.type) {
        case types.login:
            return {name:"pablo", id:"JFK545fb"}

        case types.logout:
            return {}
    
        default:
            return state;
    }
}