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
import { withStyles } from '@material-ui/core/styles';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.warning.main,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 15,
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "#fba73f",
  },
  bg:{
    backgroundColor: "	#FFFF99",
},
h1:{
  color : "#FC7C00",
  fontFamily: "Pacifico , cursive",
  textAlign: "center",
  fontSize: "70px",
},
nop:{
  fontFamily: "Pacifico , cursive",
  textAlign: "center",
  fontSize: "70px",
},
h3:{
  fontFamily: "Pacifico , cursive",
  textAlign: "center",
  fontSize: "30px",
},
hr:{
  border :" solid orange",
  
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
      <h1 className={classes.h1}>Products</h1>
      <h3 className={classes.h3}>These Products have been requested by other users.
       Click below to add your custom item request.</h3>

       <hr className={classes.hr}/>
      {userService.isLoggedIn() && 
      <LightTooltip title="Add New To List">
      <Fab
       aria-label="add" 
       className={classes.addBtn}
        onClick = {handleNewProductClick}>
      <img src="https://img.icons8.com/windows/32/000000/cute-skull.png"/>
      </Fab>
      </LightTooltip>
      }
      {products.length == 0 ? (
        <p className={classes.nop}>There are no products</p>
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