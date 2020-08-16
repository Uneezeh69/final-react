import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    linkH: {
       color : "#FC7C00",
       padding : "1rem",
       fontFamily: "Pacifico , cursive",
       textAlign: "center",
       fontSize: "70px",
     
     },
     linkP: {
         color : "white",
         padding : "1rem",
       },
     bg:{
         backgroundColor: "	#FFFF99",
     },
    h3:{
        fontFamily: "Pacifico , cursive",
        textAlign: "center",
        fontSize: "35px",
    },
     
   }));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.bg}>
        <Grid item xs={12}>
        <h1 className={classes.linkH} >Welcome to the <br></br> "Request an Item Shop"</h1>
       
        <h3 className={classes.h3}>
        <img src="https://img.icons8.com/ios/50/000000/gandalf.png"/> &nbsp;
            All your needs fulfilled in one place! &nbsp;
        <img src="https://img.icons8.com/ios/50/000000/gandalf.png"/>
        </h3>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
        <img src="https://cdn.dribbble.com/users/291221/screenshots/2026983/server-guy.gif" width= "400px" height = "300px"/>
        <br></br>
        <h4>hygycfytcf</h4>
       </Grid>
       <Grid item xs={2}></Grid>
       <Grid item xs={3}>
        <img src="https://cdn.dribbble.com/users/988145/screenshots/4053148/what-is-order-fulfillment.gif" width= "400px" height = "300px"/>
       </Grid>
       <Grid item xs={2}></Grid>
</Grid>
        );
}
 
export default LandingPage;