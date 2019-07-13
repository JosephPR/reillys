import React from 'react';
import HomePage from './Pages/Homepage/homepage';
import { Switch, Route } from 'react-router-dom';
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
      </Switch>

    </div>
  );
}

export default App;
