import { Dialog } from "@material-ui/core";
import { useState } from "react";
import React from "react";
import { Alert } from "@mui/material";
import Button from "./Button";


const DialogAlert = (props) =>{
    return(
        <Dialog open={props.open}>
            <Alert severity={props.severity} onClose={() => props.setOpen(false)}>{props.content}</Alert>
        </Dialog>
        
    )
}

export default DialogAlert;