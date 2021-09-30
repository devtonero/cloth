import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-buttom/custom-button.components';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.components';
import { connect } from 'react-redux';


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartIte => (
          <CartItem key={cartIte.id} item={cartIte} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
  });

export default connect(mapStateToProps) (CartDropdown);