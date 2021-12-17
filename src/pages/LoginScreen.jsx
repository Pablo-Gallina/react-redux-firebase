import React from 'react'
import { useDispatch } from 'react-redux'

import GoogleButton from 'react-google-button'

import { Link } from 'react-router-dom'

// Actions
import { googleLogin, googleLoginPop } from '../redux/actions/auth'

const LoginScreen = () => {
    // el hook debe de ser de react-redux
    const dispatch = useDispatch();

    const handleGoogleLogin = () => {
        
        dispatch(googleLoginPop())
    }
    return (
        <>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='user'/>
                <input type="password" name="" id="" />
                <button type="submit">Login</button>
            </form>   
            <GoogleButton onClick={handleGoogleLogin} />
            <Link to="/register">Registrarse</Link>

        </>
    )
}

export default LoginScreen
