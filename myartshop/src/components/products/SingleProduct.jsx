import React from "react";
import { Grid,  Button } from "@material-ui/core";
import productService from "../../services/ProductService";
import { withRouter } from "react-router-dom";
import userService from "../../services/UserService";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

p:{
  color : "#FC7C00",
  fontFamily :"Satisfy, cursive",
  textAlign: "center",
  fontSize: "30px",
},
h3:{
  fontFamily :"Satisfy, cursive",
  textAlign: "center",
  fontSize: "30px",
  color:"black",
},
hr:{
  
  border :"5px solid orange",
  
},

}));

const SingleProduct = (props) => {
    const { product, onDelete, history} =props;
    const classes = useStyles();
    console.log(props);
  return (
    <Grid item xs={4}>
      
      <p className={classes.p}>
      <span className={classes.h3} >Item Name:</span> &nbsp; 
        {product.name}{""}
      {userService.isAdmin() && (
      <>
      <Button 
      variant="contained"
       color="Primary"
       onClick={(e) => {
           history.push("/products/update/" + product._id);
       }}
        > Edit</Button>
      
      <Button 
      variant="contained" 
      color="Primary" 
      onClick = {(e) => {
          productService
          .deleteProduct(product._id)
          .then((data) => {
              console.log(data);
              onDelete();
          })
          .catch((err) => {
              console.log(err);
          });
      }}
      > Delete</Button>
      </>
      )}
       </p>
      
      <p className={classes.p}> 
      <span className={classes.h3} >Price to Pay:</span> &nbsp; 
       {product.price}</p>
      
      <p className={classes.p}> 
      <span className={classes.h3} >Quantity Required:</span> &nbsp; 
       {product.quantity}
       </p>
      <hr className={classes.hr}/>
    </Grid>
  );
};

export default withRouter( SingleProduct);