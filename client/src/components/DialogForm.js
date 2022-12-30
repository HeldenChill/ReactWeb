import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';


const FormDialog = ({title, content, onSell}) =>{
  const [open, setOpen] = useState(false);
  const [value,setValue] = useState("")
  const [date,setDate] = useState("2022-01-01")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  };

  const handleConfirm = () =>{
    console.log(value)
    onSell({
      customer_id:value,
      sold_time:date,
      
    })
    console.log(value)
    setOpen(false)
  }

  return (
    <div>
      <button style={{width: "48px"}} onClick={handleClickOpen}>
        Sell
      </button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          {content}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ID"
            type="text"
            fullWidth
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="DATE"
            type="date"
            fullWidth
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}

export default FormDialog;