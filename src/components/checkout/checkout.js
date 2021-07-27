import React, { Component } from 'react';
import CartComponent from '../cart/cart';
import CreditInfo from './credit-info';
import ShopperInfo from './shop-info';

class Checkout extends Component {

    

    render() {
        return (
            <div className="page-container">
                <div className="py-5 text-center">
                <div className="row">
                
                <div className="col-md-8 order-md-1">
            <div className="info-container">
                <ShopperInfo />
                
                
            </div>
            
            </div>
            
            <div className="col-md-4 order-md-2 mb-4">
                <div className="billing-container"><CartComponent /></div>
            </div>
            </div>
            <div className="row">
                <div className="col-md-8 order-md-1">
                <div className="payment-container"><CreditInfo /></div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Checkout;