import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom"

import AppScreen from '../pages/AppScreen'
import { PrivateRouter } from './PrivateRouter'

import { firebase } from '../firebase/config.js';
import { googleLogin } from '../redux/actions/auth'
import AuthRouter from './AuthRouter'
import { PublicRouter } from './PublicRouter'
import { loadData } from '../helpers/loadData'
import { leerDatos } from '../redux/actions/app'

const AppRouter = () => {
    const [log, setLog] = useState(false)
    // ejecutar un dispatch en caso de que haya una sesion iniciada
    const dispatch = useDispatch()

    // Use effect para verificar si hay un cambio en nuestra aplicacion
    useEffect(() => {
        // notificara si el estado de la autenticacion cambio
        firebase.auth().onAuthStateChanged( async user=>{
            if (user) {
                dispatch(googleLogin( user.uid, user.displayName ));
                setLog(true);
                // Leer los datos de este usuario
                const nominaDatos = await loadData(user.uid);
                
                // Dispatch para que los datos esten en redux
                dispatch(leerDatos(nominaDatos));
            }else{
                setLog(false)
            }
        })
    }, [dispatch])
    return (
        <Router>
            <Switch>
                <PrivateRouter exact path="/app" log={log} component={AppScreen} />
                <PublicRouter path="/auth" log={log} component={AuthRouter} />

                <Redirect to="/app" />
            </Switch>
        </Router>
    )
}

export default AppRouter
