import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
       display: "flex",
       justifyContent : "center",
       alignItems: "center",
       height: "300px",
     },
     child: {
         width: "500px",
         padding: "5em",
       },
   }));

const SignUp = (props) => {
    const classes = useStyles();
    return ( <div className={classes.container}>
        <div className = {classes.child}>
            <TextField label="name" fullWidth></TextField> <br/>
            <TextField label="email" fullWidth></TextField> <br/>
            <TextField  type="date" fullWidth></TextField> <br/>
            <TextField label="password" type="password" fullWidth></TextField> <br/>
            <Button variant="contained" color="secondary" >Sign Up! !</Button>
        </div>
    </div> );
}
 
export default SignUp;