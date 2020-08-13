import React from 'react';
import { Grid } from '@material-ui/core';

const SingleProduct = ({product}) => {
    return (
     <Grid item xs={3}>
    <h2>{product.name}</h2>
    <p>{product.price}</p>
    <p>{product.quantity}</p>
    </Grid> );
}
 
export default SingleProduct;