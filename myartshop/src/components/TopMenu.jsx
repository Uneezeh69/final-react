import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';


const TopMenu = () => {
    return ( <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/logout">Logout</a></li>
            <li><Button>Sign up</Button></li>
        </ul>
    </div>  );
}
 
export default TopMenu;