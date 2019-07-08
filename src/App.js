import React from 'react';
import HomePage from './Pages/Homepage/homepage';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const FunnyPage = () => {
  return (
    <div>
      <h1>Funny Page</h1>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/funny' component={FunnyPage} />
      </Switch>

    </div>
  );
}

export default App;
