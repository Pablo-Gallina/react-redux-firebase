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
            <h1>Register</h1>  
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={email} name="email" type="text" placeholder='email'/>
                <input onChange={handleChange} value={username} name="username" type="text" placeholder='username'/>
                <input onChange={handleChange} value={password} name="password" type="password" placeholder="contraseña"/>
                <input onChange={handleChange} value={password2} name="password2" type="password" placeholder="confirmar contraseña"/>
                <button type="submit">Login</button>
            </form>   
            {/* <GoogleButton onClick={handleGoogleLogin} /> */}
            <Link to="/login">Iniciar sesion</Link>
        </>
    )
}

export default RegisterScreen
