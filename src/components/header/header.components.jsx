import React from 'react';
import { Link} from 'react-router-dom';
import './header.styles.scss';
import { auth } from '../../firebase/firebase';
import {ReactComponent as Logo} from '../../assets/crown.svg';


import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.components'

import { connect } from 'react-redux';

const Header = ({currentUser, hidden}) =>  ( 
    <div className= 'header'>
        <Link className='logo-container' to="/">
            < Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='./shop'>SHOPS</Link>
            <Link className='option' to='./contact'> CONTACT</Link>
            
            {currentUser? (
                <div className='option' onClick={()=> auth.signOut()}> SIGN OUT</div>
               )   : (
                <Link className='option' to='/signin' >SIGN IN</Link>
               )}
            <CartIcon/>
            {
                hidden? null:
                <CartDropdown/>
            }
            
        </div>
       
    </div>
    
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden

});



export default connect(mapStateToProps) (Header);