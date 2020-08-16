import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import axios from "axios";
import productService from '../../services/ProductService';
import Auth from '../auth/Auth';
import { makeStyles } from "@material-ui/core/styles";
import { toast} from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  
  bg:{
    backgroundColor: "	#FFFF99",
    height:"500px",
},

}));

const NewProduct = (props) => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState(0);  
    const classes = useStyles();

    return (  
      <Auth>
    <Grid container spacing={3} className={classes.bg}>
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
            //console.log("UU");
                productService
                .addProduct({name, price, quantity})
                .then((data) => {
                  console.log(data);
                  props.history.push("/products");         
            }).catch(err => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_CENTER
              });
            });
        }}
      >
        Add New
      </Button>
    </Grid>
  </Grid>
  </Auth>
    );
}
 


export default NewProduct;