import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../redux/actions/auth';

import { crearRegistro, limipiarDatos } from '../redux/actions/app';
import Form from '../components/Form/Form';
import Table from '../components/Table/Table';
import NavBar from '../components/NavBar/NavBar';
import Modal from '../components/Modal/Modal';

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
            <NavBar displayName={auth.displayName} handleLogOut={handleLogOut}/>
            <div className="container mt-5">
                <button type="button" className="button btn-primary float-end mb-4 mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agregar Calculo
                </button>
                
                <Modal body={<Form />} />

                <Table data={data} />
            </div>
        </>
    )
}

export default AppScreen
