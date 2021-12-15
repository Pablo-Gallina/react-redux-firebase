import React from 'react'

import GoogleButton from 'react-google-button'

import { Link } from 'react-router-dom'

const LoginScreen = () => {
    return (
        <>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='user'/>
                <input type="password" name="" id="" />
                <button type="submit">Login</button>
            </form>   
            <GoogleButton onClick={()=> console.log("google")} />
            <Link to="/register">Registrarse</Link>

        </>
    )
}

export default LoginScreen
