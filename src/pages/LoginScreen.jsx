import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import GoogleButton from 'react-google-button'

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
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input onChange={handleChange} name="email" value={email} type="text" placeholder='user'/>
                <input onChange={handleChange} name="password" value={password} type="password" />
                <button type="submit">Login</button>
            </form>   
            <GoogleButton onClick={handleGoogleLogin} />
            <Link to="/register">Registrarse</Link>

        </>
    )
}

export default LoginScreen
