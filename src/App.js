import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInandSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import checkOutPage from './pages/checkoutpage/checkoutpage';


import { auth , createUserProfileDocument} from './firebase/firebase';

import { connect } from 'react-redux';
import {SetCurrentUser} from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {

  
unsubscribeFromAuth = null;

componentDidMount () {
  const {SetCurrentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshop => {
         SetCurrentUser({
            id: snapshop.id,
            ...snapshop.data()
          });

          });
            
    }
    SetCurrentUser(userAuth);
   
  });
}

componentWillUnmount () {
  this.unsubscribeFromAuth ();
}

 render () {
  return (
    <div>
      
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route  exact path='/signin' render ={()=>this.props.currentUser ? (<Redirect to='/'/>): (<SignInandSignOut/>) } />
      <Route  exact path ='/checkout' component={checkOutPage}/>
      </Switch> 
    
      
    </div>
  );

 }
 
  
} 

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser

})

const mapDispatchToProps = dispatch => ({
  SetCurrentUser: user => dispatch(SetCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
