import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from './cart/cart';
import Checkout from './checkout/checkout';

export default class Layout extends Component {
  
    render() {
      return (
        <div className='site-container'>
          
          <div className='route-container'>
          <Router>
          
          <Switch>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/checkout" component={Checkout}/>
            
          </Switch>
          
          </Router>
        </div>
        
        </div>
    
          
       
    );
  }
}