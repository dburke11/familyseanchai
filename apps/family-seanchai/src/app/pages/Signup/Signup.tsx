import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { environment } from 'apps/family-seanchai/src/environments/environment';

const Signup = () =>  {
  const uri = `${environment.apiEndpoint}/user`
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  async function createUser(){
    try {
      let data = {
        name,  
        userName,
        email,
        password
      };
      debugger;
      const res = await fetch(uri, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const response = await res.json();
      console.log(response);
    }
    catch(e) {
      console.error(e);
    }
    setOpen(false)
  }
  //TODO - move function
  async function deleteUser(){
    try {
      let data = {
         id: 1
      };
      
      const res = await fetch(uri, {
        body: JSON.stringify(data),
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const response = await res.json();
      console.log(response);
    }
    catch(e) {
      console.error(e);
    }
  }
  return (
    <div>
      <div className="Signup">
        <header className="App-header">
        <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        SIGNUP
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create your profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Populate the fields as indicated.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="userName"
            label="Username"
            type="username"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />       
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setPassword(e.target.value);
          }}
          />             
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createUser}>Create Profile</Button>
        </DialogActions>
      </Dialog>
    </div>
        <Link to='/home' style={{ textDecoration: 'none' }}>
          <Button
            variant='contained'
            size='large'
            color='primary'>
            Return Home
          </Button>
        </Link>
        </header>
      </div>
    </div>
  );
}
export default Signup;