import React from 'react';
import HomePage from './Pages/Homepage/homepage';
import { Switch, Route } from 'react-router-dom';
import SignInAndSignUpPage from './Pages/SignInSignUp/sign-in-and-sign-up'
import ShopPage from './Pages/Shop/shop'
import Header from './Components/Header/header'
import './App.css';


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>

    </div>
  );
}

export default App;
