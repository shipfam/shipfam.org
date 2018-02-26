import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const socialConfigs = {
  facebook: {
    type: 'facebook',
    provider: new firebase.auth.FacebookAuthProvider().setCustomParameters({
      display: 'popup',
    }),
  },
  twitter: {
    type: 'twitter',
    provider: null,
  },
  google: {
    type: 'google plus',
    provider: null,
  },
};

export default class Auth extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  };

  state = {
    user: null,
    authError: null,
  };

  handleAuthSuccess = (user) => {
    this.setState({ user, authError: null }, () => {
      this.context.router.history.push('/main');
    });
  };

  handleAuthError = (error) => {
    this.setState({ authError: error.message });
  };

  createUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.handleAuthSuccess(result);
      })
      .catch(this.handleAuthError);
  };

  login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.handleAuthSuccess(result);
      })
      .catch(this.handleAuthError);
  };

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState(
          {
            user: null,
            authError: null,
          },
          () => {
            this.context.router.history.push('/login');
          },
        );
      })
      .catch(this.handleAuthError);
  };

  socialLogin = (type) => {
    const { provider } = socialConfigs[type];

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        this.handleAuthSuccess(result.user);
      })
      .catch(this.handleAuthError);
  };

  render() {
    return this.props.children(
      this.state,
      this.createUser,
      this.login,
      this.signOut,
      this.socialLogin,
    );
  }
}
