import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { Select } from '@mui/material';


const DialogNotiForm = ({onConfirm, desFeilds}) =>{
  const [open, setOpen] = useState(false);
  const [type,setType] = useState("info")
  const [notiTitle,setNotiTitle] = useState("Info")
  const [notiContent,setNotiContent] = useState("")
  const [destination,setDestination] = useState(desFeilds[0])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  };

  const handleConfirm = () =>{
    onConfirm({
      type:type,
      title:notiTitle,
      content:notiContent,
      des_position:destination
    })
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>Create Notification</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Notification</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="noti-title"
            label="TITLE"
            type="text"
            fullWidth
            onChange={(e) => setNotiTitle(e.target.value)}
            value={notiTitle}
          />
          <TextField
            autoFocus
            margin="dense"
            id="noti-content"
            label="CONTENT"
            type="text"
            fullWidth
            onChange={(e) => setNotiContent(e.target.value)}
            value={notiContent}
          />
            <select style={{minWidth: "80px", marginLeft: "30px",marginTop: "30px",minHeight: "50px"}} did="destination" name="destination" value={type} onChange={e => setType(e.target.value)}>
                <option value="info">Info</option>    
                <option value="warning">Warning</option>
                <option value="success" >Success</option>
                <option value="error">Error</option>                       
            </select>  
            <select style={{minWidth: "80px", marginLeft: "30px",marginTop: "30px",minHeight: "50px"}} did="destination" name="destination" value={destination} onChange={e => setDestination(e.target.value)}>
                {desFeilds.map((item, index) => {
                    return <option style={{minHeight: "30px"}} value={item} key={index}> {item}</option>                           
                })}
            </select>  
        </DialogContent>      
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}

export default DialogNotiForm;