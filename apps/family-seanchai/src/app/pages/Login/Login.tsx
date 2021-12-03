import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { environment } from 'apps/family-seanchai/src/environments/environment';
const Login = () => {
  const uri = `${environment.apiEndpoint}/login`;
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  async function login() {
    try {
      let data = {
        email,
        password,
      };
      const res = await fetch(uri, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response = await res.json();
      setUser(response);
      console.log(user);
    } catch (e) {
      console.error(e);
    }
    setOpen(false);
    return null;
  }
  if (user) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <div className="Login">
        <header className="App-header">
          <Button variant="outlined" onClick={handleClickOpen}>
            LOGIN
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>LOGIN</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Input your login information.
              </DialogContentText>
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
              <Button onClick={login}>Login</Button>
            </DialogActions>
          </Dialog>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large" color="primary">
              Return Home
            </Button>
          </Link>
        </header>
      </div>
      <div></div>
    </div>
  );
};
export default withRouter(Login);
