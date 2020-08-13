import React from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products, setProducts] = React.useState([
        {name: "abc", price: 200, quantity: 50}
    ]);

    return ( <div>
        <h1>Available Products</h1>
        {products.map}
    </div> );
}
 
export default Products;