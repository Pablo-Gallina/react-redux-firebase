import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

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

                <h1 className="txt-center">¡Hola Otra vez!</h1>
                <p className="txt-center txt-content">Entra para ver los resultados de tu equipo</p>
            <div className="container-login">
                <button className='btn btn-google' onClick={handleGoogleLogin}>
                    <i className="fab fa-google"></i>
                    Entrar con Google
                </button>
                <form onSubmit={handleLogin}>
                    <div className="input-icon">
                        <input onChange={handleChange} name="email" value={email} type="email" placeholder='Ingresa tu Correo'/>
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="input-icon">
                        <input onChange={handleChange} name="password" className="mt-2" value={password} placeholder='Ingresa tu Contraseña' type="password" />
                        <i className="fas fa-lock"></i>
                        <span className="fas fa-eye pass"></span>
                        <span className="fas fa-eye-slash pass hidden"></span>
                    </div>
                    <button className='btn btn-primary mt-2' type="submit">Entrar</button>
                </form>
                <Link to="/register">Registrarse</Link>
            </div>

        </>
    )
}

export default LoginScreen
