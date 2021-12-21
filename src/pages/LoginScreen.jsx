import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'

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
                    <label htmlFor="email">Dirección de correo</label>
                    <div className="input-icon mb-2">
                        <input onChange={handleChange} id="email" name="email" value={email} type="email" placeholder='Ingresa tu Correo'/>
                        <i className="fas fa-envelope"></i>
                    </div>

                    <label htmlFor="password">Contraseña</label>
                    <div className="input-icon mb-2">
                        <input onChange={handleChange} id="password" name="password" value={password} placeholder='Ingresa tu Contraseña' type="password" />
                        <i className="fas fa-lock"></i>
                        <span className="fas fa-eye pass"></span>
                        <span className="fas fa-eye-slash pass hidden"></span>
                    </div>

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
