import { types } from "../types/types"

// archivo contendra los payloads y types de las actions del auth
export const googleLogin = (id, username) => {
    return {
        type: types.login, 
        payload:{id, username}
    }
}