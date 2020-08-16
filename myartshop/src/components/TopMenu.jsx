import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography, Box, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import userService from "../services/UserService";
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
   linkH: {
      color : "#a94064",
      padding : "1rem",
    },
    linkP: {
        color : "white",
        padding : "1rem",
      },
    tool:{
        fontSize: "40px",
    },
    
  }));

const TopMenu = () => {
    const classes = useStyles();
    return ( 
        <AppBar style={{ background: '#FFFF66' }} position= "sticky">
            <Toolbar>
                <Box display='flex' flexGrow={1}>
                <LightTooltip title="Home">
                <Typography variant="h5">
                    <Link to="/" className = {classes.linkH}><img src="https://img.icons8.com/ios/50/000000/home-page.png"/> </Link>
                </Typography>
                </LightTooltip>

                <LightTooltip title="Products">
                <Typography variant="h6">
                    <Link to="/products" className = {classes.linkP}><img src="https://img.icons8.com/wired/50/000000/product.png"/></Link>
                </Typography>
                </LightTooltip>

                <LightTooltip title="About Us!">
                <Typography variant="h6">
                    <Link to="/aboutus" className = {classes.linkP}><img src="https://img.icons8.com/ios/50/000000/about.png"/></Link>
                </Typography>
                </LightTooltip>
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