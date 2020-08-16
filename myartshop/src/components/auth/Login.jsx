import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import userService from '../../services/UserService';

const useStyles = makeStyles((theme) => ({
    container: {
       display: "flex",
       justifyContent : "center",
       alignItems: "center",
       height: "700px",
       backgroundColor: "	#FFFF99",
     },
     child: {
         width: "500px",
       },
       addBtn: {
        marginTop: "50px",
        marginLeft: "225px",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: "#fba73f",
      },
      h4:{
        fontFamily :"Satisfy, cursive",
        textAlign: "center",
        fontSize: "20px",
        marginLeft: "-20px",
    },
   }));

const Login = (props) => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword]  = React.useState("");
    return (
         <div className={classes.container}>

        <h1 className={classes.h4}>Login To add Products. <br/>(Only admin can change <br/> their status)</h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className = {classes.child}>
            <TextField label="email" fullWidth value={email} onChange={(e) => {
                setEmail(e.target.value);
            }}/>
            
             <br/>

            <TextField label="password" type="password" fullWidth value={password} onChange={(e) => {
                setPassword(e.target.value);
                }}/> <br/>
            <Button 
            variant="contained" 
            className= {classes.addBtn}
            onClick={(e) => {
                userService
                .login(email, password)
                .then((data) => {
                    console.log(data);
                    window.location.href = "/";
                })
                .catch((err) => {
                    console.log(err);
                })
            }}
            >Login !</Button>
        </div>
    </div> );
}
 
export default Login;