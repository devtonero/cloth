import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInandSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import checkOutPage from './pages/checkoutpage/checkoutpage';




import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {

  
unsubscribeFromAuth = null;

componentDidMount () {
  const {usersession} = this.props;
  usersession();
  
}

componentWillUnmount () {
  this.unsubscribeFromAuth ();
}

 render () {
  return (
    <div>
      <GlobalStyle/>
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
  usersession: ()=> dispatch(checkUserSession())

})

export default connect(mapStateToProps, mapDispatchToProps) (App);
