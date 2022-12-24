import { useLocation, Navigate, Outlet } from "react-router-dom";
import {selectorAuthProvider } from '../features/AuthProvider'
import { useSelector } from 'react-redux';

const RequireAuth = () => {
    const accountState = useSelector(selectorAuthProvider)   
    const location = useLocation()
    console.log(accountState)

    return(
        accountState?.isInAccount 
            ?<Outlet />
            :<Navigate to="/sign-in" state={{from: location}} replace/>
    )
}

export default RequireAuth