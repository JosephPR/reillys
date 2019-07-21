import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../Redux/Cart/cart.selectors'
import CustomButton from '../CustomButton/custom-button';
import CartItem from '../CartItem/cart-item'
import './cart-dropdown.scss';

const CartDropdown = ( { cartItems, history } ) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ? (
        cartItems.map( cartItem => (
          <CartItem key={cartItem.id } item={cartItem} />
          ))
        ) : ( <span className="empty-message">Your cart is empty</span>
    )}
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>
      CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
