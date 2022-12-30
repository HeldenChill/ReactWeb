import { Dialog } from "@material-ui/core";
import React from "react";
import { Alert } from "@mui/material";


const DialogAlert = ({severity, content, open, setOpen}) =>{
    return(
        <Dialog open={open}>
            <Alert severity={severity} onClose={() => setOpen(false)}>{content}</Alert>
        </Dialog>
        
    )
}

export default DialogAlert;