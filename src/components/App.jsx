import React from 'react';
import firebase from 'firebase';
import { css } from 'react-emotion';

import Navbar from './Navbar';

export default class App extends React.Component {
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

  render() {
    return (
      <div
        className={css({
          backgroundImage:
            'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
          height: '100vh',
        })}
      >
        <Navbar />
      </div>
    );
  }
}
