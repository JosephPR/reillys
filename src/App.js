import React, { Component } from 'react';
import HomePage from './Pages/Homepage/homepage';
import { Switch, Route } from 'react-router-dom';
import SignInAndSignUpPage from './Pages/SignInSignUp/sign-in-and-sign-up'
import ShopPage from './Pages/Shop/shop'
import Header from './Components/Header/header'
import './App.css';
import { auth } from './Firebase/firebase.utils'


export default class App extends Component {
  constructor(){
    super();

    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
  this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>

      </div>
    );
  }

}
