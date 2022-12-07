import React from "react";
import { useSelector } from "react-redux";
import '../../App.css'
import { checkValidAccount } from "../../features/CheckAccount";

const AccountPage = () =>{

    const accountState = useSelector(checkValidAccount)

    return(
        <>
            <h1 className="account-page">
                Account                
            </h1>
            <h3>Hello</h3>
        </>
        
    )
}

export default AccountPage;