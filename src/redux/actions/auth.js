import { types } from "../types/types"

import { firebase, googleAuthProvider } from '../../firebase/config'

// Login con firebase
export const googleLoginPop = () => {
    // gracias al thunk redux, este nos hacer uso del dispatch en esta funcion
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) =>{ 
                // Ejecutando dispatch para guardar los datos del login
                dispatch(googleLogin( user.uid, user.displayName ))
            })
    }
}

// archivo contendra los payloads y types de las actions del auth
export const googleLogin = (uid, displayName) => {
    return {
        type: types.login, 
        payload:{uid, displayName}
    }
}