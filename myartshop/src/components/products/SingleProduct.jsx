import React from "react";
import { Grid,  Button } from "@material-ui/core";
const SingleProduct = ({ product }) => {
  return (
    <Grid item xs={4}>
      <h2>{product.name}
      <Button variant="contained" color="Primary" > Edit</Button>
      <Button variant="contained"  color="Primary" > Delete</Button>
       </h2>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
      <hr />
    </Grid>
  );
};

export default SingleProduct;