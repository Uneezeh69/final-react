import React from 'react';
import TopMenu from './components/TopMenu';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Products from './components/products/Products';
import AboutUs from "./components/AboutUs";
import NotFound from './components/NotFound';

function App() {
  return (
  <Router>
    <TopMenu />
    <div style ={{padding :"100px"}}>
      <Switch>
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
