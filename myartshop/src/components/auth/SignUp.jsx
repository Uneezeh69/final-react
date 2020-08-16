import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import userService from '../../services/UserService';
import { toast} from 'react-toastify';

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
         padding: "5em",
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
    fields:{
        padding: "2em",
      },
   }));

const SignUp = (props) => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword]  = React.useState("");
    const [name, setName]  = React.useState("");
    const [dob, setDOB]  = React.useState("");
    return ( <div className={classes.container}>
                <h1 className={classes.h4}>Sign Up if you are not already registered. <br/>Note: Only admin can change <br/> product status.</h1>

        <div className = {classes.child}>
            <TextField className={classes.fields} label="name" fullWidth value={name} onChange = {(e) => {setName(e.target.value)}}></TextField> <br/>
            <TextField className={classes.fields} label="email" fullWidth value={email} onChange = {(e) => {setEmail(e.target.value)}}></TextField> <br/>
            <TextField className={classes.fields} type="date" fullWidth value={dob} onChange = {(e) => {setDOB(e.target.value)}}></TextField> <br/>
            <TextField className={classes.fields} label="password" type="password" fullWidth value={password} onChange = {(e) => {setPassword(e.target.value)}}></TextField> <br/>
            <Button 
            className={classes.addBtn}
            variant="contained"
          
             onClick = {(e) => {
                 userService
                 .register(name, email, dob, password)
                 .then((data) => {
                     console.log(data);
                     props.history.push("/login");
                 })
                 .catch((err) => {
                    console.log(err);
                    toast.error(err.response.data, {
                        position: toast.POSITION.TOP_CENTER
                    });
                 });
             }}
             >Sign Up! !</Button>
        </div>
    </div> );
}
 
export default SignUp;