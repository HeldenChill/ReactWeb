import { useLocation, Navigate, Outlet } from "react-router-dom";
import {selectorAuthProvider } from '../features/AuthProvider'
import { useSelector } from 'react-redux';
import React from "react";

const RequireAuth = () => {
    const accountState = useSelector(selectorAuthProvider)   
    const location = useLocation()

    return(
        accountState.isInAccount 
            ?<Outlet />
            :<Navigate to="/sign-in" state={{from: location}} replace/>
    )
}

export default RequireAuth