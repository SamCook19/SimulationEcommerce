import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {
	Cart,
	Product,
	CheckoutButton,
	cartLocalization,
	cartReducer,
	setCartCurrency
} from 'react-shopping-cart';

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";

const { getDefaultLocalization } = cartLocalization;

const ProductLocalization = {
  Product: "Product",
  USD: "$"
};


const store = createStore(
  combineReducers({
    cart: cartReducer
    
  })
);

store.dispatch(setCartCurrency("USD"));

class CartComponent extends Component {
  state = {
    product: {
      name: "Product",
      id: "product",
      prices: {  USD: 25 },
      currency: "USD",
      imageSrc: ""
    },
    getProductLocalization: getDefaultLocalization("product", "en", {
      ...ProductLocalization,
    }),
    getCheckoutButtonLocalization: getDefaultLocalization(
      "checkoutButton",
      "en",
      ProductLocalization
    ),
    getCartLocalization: getDefaultLocalization(
      "cart",
      "en",
      ProductLocalization
    )
  };

  render() {
    const {
      product,
      getCheckoutButtonLocalization,
      getProductLocalization,
      getCartLocalization
    } = this.state;

    const checkoutButtonElement = (
      <CheckoutButton
        getLocalization={getCheckoutButtonLocalization}
        checkoutURL="/to/my/checkout"
      />
    );
    return (
      <Provider store={store}>
        <div className="container">
          <Product
            {...product}
            checkoutButton={checkoutButtonElement}
            getLocalization={getProductLocalization}
          />
          <Cart
            checkoutButton={checkoutButtonElement}
            getLocalization={getCartLocalization}
          />
        </div>
      </Provider>
    );
  }
}

export default CartComponent;