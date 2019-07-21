import React from 'react';
import { connect } from 'react-redux'

import { selectCartItems } from '../../Redux/Cart/cart.selectors'
import CustomButton from '../CustomButton/custom-button';
import CartItem from '../CartItem/cart-item'
import './cart-dropdown.scss';

const CartDropdown = ( { cartItems } ) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map( cartItem => (
          <CartItem key={cartItem.id } item={cartItem} />
          ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps

)(CartDropdown);
