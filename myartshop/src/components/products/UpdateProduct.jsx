import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import axios from "axios";
import productService from '../../services/ProductService';
import Auth from '../auth/Auth';
import Admin from '../auth/Admin';
import { toast} from 'react-toastify';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  
  bg:{
      backgroundColor: "	#FFFF99",
      height:"500px",
  },
  h1:{
    color : "#FC7C00",
    fontFamily: "Pacifico , cursive",
    textAlign: "center",
    fontSize: "40px",
  },
  fields:{
    padding: "2em",
  },
  addBtn: {
    marginLeft: "275px",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "#fba73f",
  },
  }));

const UpdateProduct = (props) => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState(0);  
    const id = props.match.params.id;

    const classes = useStyles();

    React.useEffect(() => {
        productService.getSingleProduct(id).then((data) => {
            setName(data.name);
            setPrice(data.price);
            setQuantity(data.quantity);
        });
    }, []);

    return (  
      <Admin>
    <Grid container spacing={1} className={classes.bg}>
    <Grid item xs={12}>
    <h1 className={classes.h1}>Update Product</h1>
    </Grid>
    <Grid item xs={3}></Grid>
    <Grid item xs={6}>
      <TextField
            className={classes.fields}
        label="name"
        fullWidth
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
            className={classes.fields}
        label="price"
        fullWidth
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
       <TextField
             className={classes.fields}
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
        className= {classes.addBtn}
        onClick = {e => {
            //console.log("UU");
                productService
                .updateProduct(id, {name, price, quantity})
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
        Update
      </Button>
    </Grid>
  </Grid>
  </Admin>
    );
}
 


export default UpdateProduct;