import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Icon, Form } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import firebase from 'firebase';

function capitalizeWords(string) {
  return string.replace(/\b\w/g, (l) => l.toUpperCase());
}

// Making semantic-ui css override-able with styled components:
// https://github.com/styled-components/styled-components/issues/501
const SocialButton = styled(Button)`
  &&& {
    margin: 5px 0;
  }
`;

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

export default class AuthForm extends React.Component {
  static propTypes = {
    onSuccess: PropTypes.func,
    type: PropTypes.oneOf(['signUp', 'login']).isRequired,
  };

  static defaultProps = {
    onSuccess: () => {},
  };

  state = {
    errorMessage: null,
    email: '',
    password: '',
  };

  get headerText() {
    return this.props.type === 'signUp' ? 'Sign Up' : 'Login';
  }

  handleSocialClick = (event, props) => {
    const { provider } = socialConfigs[props.type];

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        this.props.onSuccess(result.user.displayName);
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleFormSubmit = () => {
    const { email, password } = this.state;

    const authMethod =
      this.props.type === 'signUp'
        ? 'createUserWithEmailAndPassword'
        : 'signInWithEmailAndPassword';

    firebase
      .auth()
      [authMethod](email, password) // eslint-disable-line
      .then((result) => {
        this.props.onSuccess(result.email);
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  };

  renderSocial = (type) => (
    <SocialButton
      fluid
      type={type}
      color={type}
      onClick={this.handleSocialClick}
    >
      <Icon name={type} /> {this.headerText} with {capitalizeWords(type)}
    </SocialButton>
  );

  render() {
    return (
      <Card raised>
        <Card.Content header={this.headerText} textAlign="center" />
        <Card.Content>
          <Form onSubmit={this.handleFormSubmit}>
            <Form.Field>
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  type="text"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </label>
            </Form.Field>
            <Form.Field>
              <label htmlFor="password">
                Password
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </label>
            </Form.Field>
            <Form.Button>Submit</Form.Button>
          </Form>
        </Card.Content>
        <Card.Content textAlign="center">
          {this.renderSocial(socialConfigs.facebook.type)}
          {this.state.errorMessage && (
            <p className={css({ color: 'red' })}>
              Authentication Error: {this.state.errorMessage}
            </p>
          )}
        </Card.Content>
      </Card>
    );
  }
}
