import React from "react";
import SingleProduct from "./SingleProduct";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import productService from "../../services/ProductService";
import userService from "../../services/UserService";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();
  const getData = () => {
    productService
      .getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);

  const handleNewProductClick = () => {
    props.history.push("/products/new");
  };

  //console.log("Inside Products Component");
  return (
    <div>
      <h1>Products</h1>
      {userService.isLoggedIn() && 
       <Tooltip title="Add" aria-label="add">
      <Fab color="secondary"
       aria-label="add" 
       className={classes.addBtn}
        onClick = {handleNewProductClick}>
        <FavoriteIcon />
      </Fab>
      </Tooltip>
      }
      {products.length == 0 ? (
        <p>There are no products</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} onDelete = {getData} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;