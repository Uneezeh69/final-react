import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    linkH: {
       color : "#a94064",
       padding : "1rem",
     },
     linkP: {
         color : "white",
         padding : "1rem",
       },
     
     
   }));

const LandingPage = () => {
    const classes = useStyles();
    return ( <div >
        
        <h1 className={classes.linkH}>Welcome to the Request an Item Shop</h1>
        <Container maxWidth="sm">

        <img src="https://images.prismic.io/yumetwins/9c85ed35f1940d81207e30d144ad13cf40af3233_5kawamain.jpg?auto=compress,format" alt="/"/>
        </Container>

    </div> );
}
 
export default LandingPage;