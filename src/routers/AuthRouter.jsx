import { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { useDispatch } from "react-redux";

import LoginScreen from "../pages/LoginScreen"
import RegisterScreen from "../pages/RegisterScreen"

import { firebase } from '../firebase/config.js';
import { googleLogin } from "../redux/actions/auth";
import AppRouter from "./AppRouter";

const AuthRouter = () => {
    // ejecutar un dispatch en caso de que haya una sesion iniciada
    const dispatch = useDispatch()

    // Use effect para verificar si hay un cambio en nuestra aplicacion
    useEffect(() => {
        // notificara si el estado de la autenticacion cambio
        firebase.auth().onAuthStateChanged( user=>{
            if (user) {
                dispatch(googleLogin( user.uid, user.displayName ))
            }
        })
    }, [])
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/register" component={RegisterScreen} />

                <AppRouter />
            </Switch>
        </Router>
    )
}

export default AuthRouter
