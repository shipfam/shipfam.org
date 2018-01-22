import React from 'react';
import firebase from 'firebase';
import { css } from 'react-emotion';

import Navbar from './Navbar';
import AuthForm from './AuthForm';
import Home from './Home';

export default class App extends React.Component {
  state = { currentUser: null, authFormType: 'signUp' };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCPYM-SZmMieiDjPk4rJnu6lii1F3TXRVA',
      authDomain: 'shipfam-84383.firebaseapp.com',
      databaseURL: 'https://shipfam-84383.firebaseio.com',
      projectId: 'shipfam-84383',
      storageBucket: 'shipfam-84383.appspot.com',
      messagingSenderId: '465280760184',
    });
  }

  get itemText() {
    const { currentUser, authFormType } = this.state;

    if (currentUser) {
      return `Sign out ${currentUser}`;
    } else if (authFormType === 'signUp') {
      return 'Login';
    }
    return 'Sign Up';
  }

  async signOut() {
    try {
      await firebase.auth().signOut();
      this.setState({ currentUser: null });
    } catch (error) {
      alert('error signing out');
    }
  }

  handleLogin = (user) => {
    this.setState({ currentUser: user });
  };

  handleNavItemClick = () => {
    const { currentUser, authFormType } = this.state;

    if (currentUser) {
      this.signOut();
    } else if (authFormType === 'signUp') {
      this.setState({ authFormType: 'login' });
    } else {
      this.setState({ authFormType: 'signUp' });
    }
  };

  render() {
    const { authFormType } = this.state;

    return (
      <div
        className={css({
          backgroundImage:
            'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
          height: '100vh',
        })}
      >
        <Navbar
          onItemClick={this.handleNavItemClick}
          itemText={this.itemText}
        />

        <div
          className={css({
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          {this.state.currentUser ? (
            <Home />
          ) : (
            <AuthForm type={authFormType} onSuccess={this.handleLogin} />
          )}
        </div>
      </div>
    );
  }
}
