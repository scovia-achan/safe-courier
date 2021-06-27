import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function Protected({isAuth: isAuth, component: Component, ...rest}) {
    return (
     
        <Route {..rest} render={}/> 
     
    )
}
