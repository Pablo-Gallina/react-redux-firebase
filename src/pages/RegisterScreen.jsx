import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../redux/actions/auth'

const RegisterScreen = () => {
    // dispatch para registrar un usuario
    const dispatch = useDispatch()

    const [data, setData] = useState({
        email: "",
        username: "",
        password: "",
        password2 : ""
    })

    const { email, username, password, password2 } = data;

    const handleChange = e => {
        const value = e.target.value;
        
        setData({
            ...data,
            [e.target.name]:value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();

        // disparar la accion registerUser que se encarga de regsitrar un usuario
        dispatch(registerUser(email, password, username))
    }
    return (
        <>
            <div className="container-login -mt-3">
                <h2 className="txt-center">
                    Únete ahora y no te pierdas más de los últimos <br />
                    resultados de tu equipo favorito de futbol
                </h2>  
                <button className='btn btn-google large mt-2' onClick={()=>{}}>
                        <i className="fab fa-google"></i>
                        Entrar con Google
                </button>

                <span className="small">ó registrate con tu correo electrónico</span>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Escribe tu correo</label>
                    <div className="input-icon">
                        <input className="large mb-2" onChange={handleChange} id='email' value={email} name="email" type="text" placeholder='Ingresa tu Correo'/>
                        <i className="fas fa-envelope"></i>
                    </div>

                    <label htmlFor="username">¿Cómo te llamas?</label>
                    <div className="input-icon">
                        <input className="large mb-2" onChange={handleChange} id="username" value={username} name="username" type="text" placeholder='Ingresa tu nombre completo'/>
                        <i className="fas fa-user"></i>
                    </div>

                    <label htmlFor="password">Crea una contraseña</label>
                    <div className="input-icon">
                        <input className="large mb-2" onChange={handleChange} value={password} id="password" name="password" type="password" placeholder="Ingresa tu Contraseña"/>
                        <i className="fas fa-lock"></i>
                        <span className="fas fa-eye pass"></span>
                        <span className="fas fa-eye-slash pass hidden"></span>
                    </div>
                    
                    <label htmlFor="password2">Confirma tu contraseña</label>
                    <div className="input-icon">
                        <input className="large mb-2" onChange={handleChange} value={password2} id='password2' name="password2" type="password" placeholder="Repite tu Contraseña"/>
                        <i className="fas fa-lock"></i>
                        <span className="fas fa-eye pass"></span>
                        <span className="fas fa-eye-slash pass hidden"></span>
                    </div>

                    <span className="small">Al registrarte aceptas los <strong>términos y condiciones</strong> </span> <br />
                    <button className="btn btn-primary large mt-2 mb-2" type="submit">Crear mi cuenta</button>
                </form>

                <div className="have-account">
                    <p className="txt-content small">
                        ¿Ya tienes cuenta?
                    </p>
                    <Link className="link small" to="/login">Entrar</Link>
                </div>
            </div>
        </>
    )
}

export default RegisterScreen
