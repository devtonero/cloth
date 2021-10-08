import React from 'react';

import './checkoutpage.styles.scss';

import StripeCheckOutButton from '../../components/stripe-button/stripe-button.components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.components';


const checkOutPage  = ({cartitems, totalprice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>

            <div className='header-block'>
                <span>Description</span>
            </div>

            <div className='header-block'>
                <span>Quantity</span>
            </div>

            <div className='header-block'>
                <span>Price</span>
            </div>

            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>   
        {cartitems.map(cartitem => (
            <CheckoutItem key={cartitem.id} cartitem={cartitem} />
        ))}

            <div className='total'> ${totalprice}</div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </div>
            <div className='button'>
            <StripeCheckOutButton price={totalprice}/>
            </div>

       
    </div>
)
const mapStateToProps = createStructuredSelector ({
     cartitems: selectCartItems,
     totalprice: selectCartTotal
    })

export default connect(mapStateToProps)(checkOutPage);