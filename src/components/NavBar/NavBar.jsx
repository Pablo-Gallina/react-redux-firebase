import React from 'react'
import Button from '../Button/Button'

const NavBar = ({ displayName, handleLogOut }) => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h3>Bienvendio, { displayName }</h3>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarColor01">

                    <Button type="submit" clases="btn btn-outline-danger" texto="Cerrar sesion" onClick={handleLogOut}/>
                </div>
            </div>
      </nav>
    )
}

export default NavBar
