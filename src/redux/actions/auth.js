import { types } from "../types/types"

import { firebase, googleAuthProvider } from '../../firebase/config'

// Login con firebase
export const googleLoginPop = () => {
    // gracias al thunk redux, este nos hacer uso del dispatch en esta funcion
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(data =>{ console.log(data) })
    }
}

// archivo contendra los payloads y types de las actions del auth
export const googleLogin = (id, username) => {
    return {
        type: types.login, 
        payload:{id, username}
    }
}