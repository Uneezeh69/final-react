import React from 'react';
import TopMenu from './components/TopMenu';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Products from './components/products/Products';
import AboutUs from "./components/AboutUs";
import NotFound from './components/NotFound';
import NewProduct from './components/products/NewProduct';
import UpdateProduct from './components/products/UpdateProduct';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
  <Router>
    <ToastContainer/>
    <TopMenu />
    <div style ={{padding :"30px"}}>
      <Switch>
      <Route path="/login" component = {Login}/>
      <Route path="/signup" component = {SignUp}/>
       <Route path="/products/new" component = {NewProduct}/>
       <Route path="/products/update/:id" component = {UpdateProduct}/>
       <Route path="/products" component = {Products}/>
       <Route path="/aboutus" component = {AboutUs}/>      
       <Route path="/notfound" component ={NotFound}/>
       <Route path="/" exact component = {LandingPage}/>
       <Redirect to="/notfound" />
     </Switch>
    </div>
  </Router>
  );
}

export default App;
