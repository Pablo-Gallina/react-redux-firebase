import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRouter = ({log, component: Component, ...rest}) => {
    return (
        <Route {...rest} component={(props) =>
            log ? <Redirect to="/app" /> : <Component {...props}/>
        } />
    )
}