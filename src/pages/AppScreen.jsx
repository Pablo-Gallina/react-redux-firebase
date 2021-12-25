import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../redux/actions/auth';

import { crearRegistro, limipiarDatos } from '../redux/actions/app';
import Form from '../components/Form/Form';
import Table from '../components/Table/Table';

const AppScreen = () => {
    const dispatch = useDispatch();

    // Retorna el state de redux (auth)
    const { auth, app  } = useSelector(state => state);

    const { nomina : data } = app;
    
    const handleLogOut = () => {
        dispatch(logOut())
        dispatch(limipiarDatos())
    }

    return (
        <>
            <h1>App screen</h1>

            <h1>Hola { auth.displayName }</h1>
            <button onClick={handleLogOut}>LogOut</button>

            <Form />

            <Table data={data} />
        </>
    )
}

export default AppScreen
