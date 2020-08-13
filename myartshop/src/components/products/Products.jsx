import React from 'react';
import SingleProduct from './SingleProduct';
import axios from "axios";
import { Grid } from '@material-ui/core';
const Products = () => {
    const [products, setProducts] = React.useState([]);
       const getData = () => {
           axios
           .get("http://localhost:4000/api/products")
           .then((res) => {
               setProducts(res.data);
           })
           .catch((err) =>{
               console.log(err);
           });
        };
//getData();
React.useEffect(getData, []);
    return ( 
    <div>
        <h1>Available Products</h1>
        {products.length == 0 ? (
            <p>No Items Listed Yet :(</p>
        ) : (
            <Grid container spacing={3}>
                {products.map((product, index) => (
                    <SingleProduct key={index} product = {product} />
                ))}
            </Grid>
        )}
    </div> );
}
 
export default Products;