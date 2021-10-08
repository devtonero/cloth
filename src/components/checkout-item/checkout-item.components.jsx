import React from "react";
import './checkout-item.styles.scss';
import { removeItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";



const CheckoutItem = ({cartitem, addItem,  removeItem, reduceItem}) => {
    const  {name, quantity, price, imageUrl} = cartitem;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        
        <span className='quantity'>
            <div className='arrow'onClick={()=> reduceItem(cartitem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=> addItem(cartitem)}>&#10095;</div>
        </span>
        <span className='price'> {price}</span>
        <div className='remove-button' onClick={()=> removeItem(cartitem)}>&#10005;</div>
    </div>
);};
const mapDisPatch = dispatch => ({
    removeItem: item  => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    reduceItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDisPatch)(CheckoutItem);