import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import userService from '../../services/UserService';

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
    const [email, setEmail] = React.useState("ram@ram.com");
    const [password, setPassword]  = React.useState("ram");
    const [name, setName]  = React.useState("ram");
    const [dob, setDOB]  = React.useState("11-11-11");
    return ( <div className={classes.container}>
        <div className = {classes.child}>
            <TextField label="name" fullWidth value={name} onChange = {(e) => {setName(e.target.value)}}></TextField> <br/>
            <TextField label="email" fullWidth value={email} onChange = {(e) => {setEmail(e.target.value)}}></TextField> <br/>
            <TextField  type="date" fullWidth value={dob} onChange = {(e) => {setDOB(e.target.value)}}></TextField> <br/>
            <TextField label="password" type="password" fullWidth value={password} onChange = {(e) => {setPassword(e.target.value)}}></TextField> <br/>
            <Button 
            variant="contained"
             color="secondary" 
             onClick = {(e) => {
                 userService
                 .register(name, email, dob, password)
                 .then((data) => {
                     console.log(data);
                 })
                 .catch((err) => {
                    console.log(err);
                 });
             }}
             >Sign Up! !</Button>
        </div>
    </div> );
}
 
export default SignUp;