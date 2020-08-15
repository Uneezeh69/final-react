import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import axios from "axios";
import productService from '../../services/ProductService';
import Auth from '../auth/Auth';
import Admin from '../auth/Admin';


const UpdateProduct = (props) => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState(0);  
    const id = props.match.params.id;
    React.useEffect(() => {
        productService.getSingleProduct(id).then((data) => {
            setName(data.name);
            setPrice(data.price);
            setQuantity(data.quantity);
        });
    }, []);

    return (  
      <Admin>
    <Grid container spacing={3}>
    <Grid item xs={12}>
      <h1>Update Product</h1>
    </Grid>
    <Grid item xs={3}></Grid>
    <Grid item xs={6}>
      <TextField
        label="name"
        fullWidth
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        label="price"
        fullWidth
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
       <TextField
        label="quantity"
        fullWidth
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />
    </Grid>
    <Grid item xs={3}></Grid>
    <Grid item xs={3}></Grid>
    <Grid item xs={9}>
      <Button
        variant="contained"
        color="primary"
        onClick = {e => {
            //console.log("UU");
                productService
                .updateProduct(id, {name, price, quantity})
                .then((data) => {
                  console.log(data);
                  props.history.push("/products");         
            }).catch(err => {
                console.log(err);
            });
        }}
      >
        Update
      </Button>
    </Grid>
  </Grid>
  </Admin>
    );
}
 


export default UpdateProduct;