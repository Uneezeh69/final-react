import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import axios from "axios";


const NewProduct = (props) => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState(0);  
    return (  
    <Grid container spacing={3}>
    <Grid item xs={12}>
      <h1>Add New Product</h1>
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
            console.log("UU");
            axios.post("http://localhost:4000/api/products", {name, price, quantity}).then(res => {
                console.log(res.data);
                props.history.push("/products");
            }).catch(err => {
                console.log(err);
            });
        }}
      >
        Add New
      </Button>
    </Grid>
  </Grid>
    );
}
 


export default NewProduct;