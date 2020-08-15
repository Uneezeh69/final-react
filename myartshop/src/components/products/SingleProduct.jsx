import React from "react";
import { Grid,  Button } from "@material-ui/core";
import productService from "../../services/ProductService";
import { withRouter } from "react-router-dom";
import userService from "../../services/UserService";
const SingleProduct = (props) => {
    const { product, onDelete, history} =props;
    console.log(props);
  return (
    <Grid item xs={4}>
      <h2>{product.name}{""}
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
       </h2>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
      <hr />
    </Grid>
  );
};

export default withRouter( SingleProduct);