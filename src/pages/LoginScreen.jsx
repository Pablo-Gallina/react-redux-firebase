import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import InputIcon from '../components/InputIcon/InputIcon'

// Actions
import { googleLoginPop, loginEmailPass } from '../redux/actions/auth'

const LoginScreen = () => {
    // el hook debe de ser de react-redux
    const dispatch = useDispatch();

    const handleGoogleLogin = () => {
        
        dispatch(googleLoginPop())
    }

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const { email, password } = data;

    const handleChange = e => {
        const value = e.target.value;
        
        setData({
            ...data,
            [e.target.name]:value
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        dispatch(loginEmailPass(email, password))
    }
    return (
        <>

            <div className="container-login -mt-3">
                <h1 className="txt-center">¡Hola Otra vez!</h1>
                <p className="txt-center txt-content">Entra para ver los resultados de tu equipo</p>
                
                <Button clases='btn btn-google mt-5' icono="fab fa-google" texto="Entrar con Google" onClick={handleGoogleLogin}/>

                <span className="small">ó entra con tu correo</span>

                <form onSubmit={handleLogin}>
                    <InputIcon id="email" textoLabel="Dirección de correo" contClases="input-icon mb-2" inputClases="" placeholder="Ingresa tu Correo" icono="fas fa-envelope" onChange={handleChange} type="email" value={email} />

                    <InputIcon id="password" textoLabel="Contraseña" contClases="input-icon mb-2" inputClases="" placeholder="Ingresa tu Contraseña" icono="fas fa-lock" onChange={handleChange} type="password" value={password} typPass={true}/>

                    <Button type="submit" clases="btn btn-primary mt-2 mb-4" texto="Entrar" />
                </form>
                <p className="txt-content small">
                ¿Aún no tienes cuenta en FutbolHoy?
                </p>
                <Link className="link -mt-3 small" to="/register"> Registrate gratis</Link>
            </div>

        </>
    )
}

export default LoginScreen
