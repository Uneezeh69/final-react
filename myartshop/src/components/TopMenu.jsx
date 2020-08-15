import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import userService from "../services/UserService";

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
                <Box display='flex' flexGrow={1}>
                <Typography variant="h5">
                    <Link to="/" className = {classes.linkH}><img src="https://img.icons8.com/ios/50/000000/home-page.png"/> </Link>
                </Typography>

                <Typography variant="h6">
                    <Link to="/products" className = {classes.linkP}><img src="https://img.icons8.com/wired/50/000000/product.png"/></Link>
                </Typography>

                <Typography variant="h6">
                    <Link to="/aboutus" className = {classes.linkP}><img src="https://img.icons8.com/ios/50/000000/about.png"/></Link>
                </Typography>
                </Box>
                {!userService.isLoggedIn()? <>
                <Typography variant="h6">
                    <Link to="/login" className = {classes.linkP}><img src="https://img.icons8.com/ios/50/000000/login-rounded-right.png"/></Link>
                </Typography>

                <Typography variant="h6">
                    <Link to="/signup" className = {classes.linkP} ><img src="https://img.icons8.com/ios/50/000000/login-rounded-down.png"/></Link>
                </Typography>
                </> : 
                <Button 
                variant="contained"
                color="secondary"
                onClick = { (e) => {
                    userService.logout();
                    window.location.reload();
                }}
                > {userService.getloggedInUser().name } &nbsp; &nbsp;
                <img src="https://img.icons8.com/metro/26/000000/logout-rounded-left.png"/>
                </Button>
                 }
                    
            </Toolbar>
        </AppBar>
      );
};
 
export default TopMenu;