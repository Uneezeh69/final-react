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
       },
   }));

const Login = (props) => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("uni@uni.com");
    const [password, setPassword]  = React.useState("uni");
    return ( <div className={classes.container}>
        <div className = {classes.child}>
            <TextField label="email" fullWidth value={email} onChange={(e) => {
                setEmail(e.target.value);
            }}></TextField> <br/>
            <TextField label="password" type="password" fullWidth value={password} onChange={(e) => {
                setPassword(e.target.value);></TextField> <br/>
            <Button variant="contained" color="secondary">Login !</Button>
        </div>
    </div> );
}
 
export default Login;