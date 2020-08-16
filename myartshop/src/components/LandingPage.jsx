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
    h4:{
        fontFamily: "Pacifico , cursive",
        textAlign: "center",
        fontSize: "20px",
    },
    p:{
        fontSize: "30px",
        color : "#FC7C00",
        fontFamily: "Pacifico , cursive",
        textAlign: "center",

    },
    im:{
        marginLeft :"100px",
        marginTop : "150px",
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

            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
            <img src="https://cdn.dribbble.com/users/291221/screenshots/2026983/server-guy.gif" width= "500px" height = "400px"/>
            <br></br>
            <h4 className={classes.h4}>Tell Us Your Requirement.</h4>
            </Grid>
            <Grid item xs={2}>
            <img src="https://img.icons8.com/material-sharp/48/000000/long-arrow-right.png" width="80px" className={classes.im}/>
            </Grid>
            <Grid item xs={3}>
            <img src="https://cdn.dribbble.com/users/988145/screenshots/4053148/what-is-order-fulfillment.gif"  width= "500px" height = "400px"/>
            <br></br>
            <h4 className={classes.h4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            Get it delivered the next day!</h4>
            </Grid>
            <Grid item xs={2}></Grid>

            <Grid item xs={12}>
            <h3 className={classes.h3} > And it's done! As simple as that!
            <br></br></h3>

            <p className={classes.p}>
            Sit back and let us do our magic to get you what you need 
            <img src="https://img.icons8.com/ios/50/000000/witch.png"/>
            </p>

        
            </Grid>
    </Grid>
        );
}
 
export default LandingPage;