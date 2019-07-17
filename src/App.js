import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './Firebase/firebase.utils'
import HomePage from './Pages/Homepage/homepage';
import SignInAndSignUpPage from './Pages/SignInSignUp/sign-in-and-sign-up'
import ShopPage from './Pages/Shop/shop'
import Header from './Components/Header/header'
import { setCurrentUser } from './Redux/User/user.actions'
import './App.css';



 class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} =this.props

    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
       setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin'
             render={() => this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )} />
        </Switch>

      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
