import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   linkH: {
      color : "#a94064",
      padding : "1rem",
    },
    linkP: {
        color : "white",
        padding : "1rem",
      },
  }));

const TopMenu = () => {
    const classes = useStyles();
    return ( 
        <AppBar style={{ background: '#fc8eac' }} position= "sticky">
            <Toolbar>
                <Typography variant="h4">
                    <Link to="/" className = {classes.linkH}>Home</Link>
                </Typography>

                <Typography variant="h5">
                    <Link to="/products" className = {classes.linkP}>Products</Link>
                </Typography>

                <Typography variant="h5">
                    <Link to="/aboutus" className = {classes.linkP}>About Us!</Link>
                </Typography>

                <Typography variant="h7">
                    <Link to="/login" className = {classes.linkP}>Login</Link>
                </Typography>

                <Typography variant="h7">
                    <Link to="/signup" className = {classes.linkP}>Sign Up</Link>
                </Typography>


            </Toolbar>
        </AppBar>
      );
};
 
export default TopMenu;