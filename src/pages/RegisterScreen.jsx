import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import InputIcon from '../components/InputIcon/InputIcon'
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

                <Button clases='btn btn-google large mt-2' icono="fab fa-google" texto="Registrarte con Google" onClick={()=>{}}/>

                <span className="small">ó registrate con tu correo electrónico</span>

                <form onSubmit={handleSubmit}>
                    <InputIcon id="email" textoLabel="Escribe tu correo" contClases="input-icon" inputClases="large mb-2" placeholder="Ingresa tu Correo" icono="fas fa-envelope" onChange={handleChange} type="email" value={email}/>

                    <InputIcon id="username" textoLabel="¿Cómo te llamas?" contClases="input-icon" inputClases="large mb-2" placeholder="Ingresa tu nombre completo" icono="fas fa-user" onChange={handleChange} type="text" value={username}/>

                    <InputIcon id="password" textoLabel="Crea una contraseña" contClases="input-icon" inputClases="large mb-2" placeholder="Ingresa tu Contraseña" icono="fas fa-lock" onChange={handleChange} type="password" value={password} typPass={true}/>

                    <InputIcon id="password2" textoLabel="Confirma tu contraseña" contClases="input-icon" inputClases="large mb-2" placeholder="Repite tu Contraseña" icono="fas fa-lock" onChange={handleChange} type="password" value={password2} typPass={true}/>
                    
                    <span className="small">Al registrarte aceptas los <strong>términos y condiciones</strong> </span> <br />
                    <Button type="submit" clases="btn btn-primary large mt-2 mb-2" texto="Crear mi cuenta" />
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
