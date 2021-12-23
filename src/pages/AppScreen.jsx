import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../redux/actions/auth';

import { crearRegistro } from '../redux/actions/app';
import Form from '../components/Form/Form';

const AppScreen = () => {
    const dispatch = useDispatch();

    // Retorna el state de redux (auth)
    const { auth } = useSelector(state => state);

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <>
            <h1>App screen</h1>

            <h1>Hola { auth.displayName }</h1>
            <button onClick={handleLogOut}>LogOut</button>

            <Form />
        </>
    )
}

export default AppScreen
