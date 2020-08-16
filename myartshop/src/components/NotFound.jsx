import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
    h3:{
        fontFamily: "Pacifico , cursive",
        textAlign: "center",
        fontSize: "40px",
        marginLeft: "60px",
    },
   
     
   }));
const NotFound = () => {
    const classes = useStyles();

    return (
        <div className = {classes.h3}>
            <h1>P A G E  &nbsp; &nbsp; &nbsp;  
                D O E S   &nbsp; &nbsp; &nbsp;
                N O T     &nbsp; &nbsp; &nbsp;
                E X I S T</h1>  

                <img src="https://img.icons8.com/ios/100/000000/fat-man-cry.png"/>
        </div>
     );
}
 
export default NotFound;