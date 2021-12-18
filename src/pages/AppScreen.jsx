import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/actions/auth';

const AppScreen = () => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <>
            <h1>App screen</h1>
            <button onClick={handleLogOut}>LogOut</button>
        </>
    )
}

export default AppScreen
