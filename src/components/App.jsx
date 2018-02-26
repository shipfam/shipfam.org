import React from 'react';
import firebase from 'firebase';
import glamorous, { Div } from 'glamorous';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Login, Main, SignUp } from '../routes';
import { Auth, NavBar, PrivateRoute } from '../components';
import bgImage from '../assets/img/flumebg.jpg';

const Background = glamorous.div({
  height: '100%',
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

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
      <Router>
        <Background>
          <Auth>
            {({ user, authError }, signUp, login, signOut, socialLogin) => (
              <React.Fragment>
                <NavBar isLoggedIn={!!user} signOut={signOut} />
                <Div
                  css={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Switch>
                    <Route
                      exact
                      path="/login"
                      render={() => (
                        <Login
                          login={login}
                          authError={authError}
                          socialLogin={socialLogin}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/signup"
                      render={() => (
                        <SignUp
                          signUp={signUp}
                          authError={authError}
                          socialLogin={socialLogin}
                        />
                      )}
                    />
                    <PrivateRoute
                      exact
                      path="/main"
                      isLoggedIn={!!user}
                      render={() => <Main user={user} />}
                    />
                    <Redirect to="/login" />
                  </Switch>
                </Div>
              </React.Fragment>
            )}
          </Auth>
        </Background>
      </Router>
    );
  }
}
