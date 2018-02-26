import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Form } from 'semantic-ui-react';

import { Card, Button, Input, ErrorMessage } from '../components';

const styles = {
  socialBtn: {
    margin: '10px 0',
    fontSize: 20,
  },
  submitBtn: {
    width: '50%',
  },
};

const Header = glamorous.p({
  '&&&': {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default class Login extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    socialLogin: PropTypes.func.isRequired,
    authError: PropTypes.string,
  };

  static defaultProps = {
    authError: '',
  };

  state = {
    email: '',
    password: '',
  };

  handleFormSubmit = () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleFacebookClick = () => {
    this.props.socialLogin('facebook');
  };

  render() {
    const { email, password } = this.state;
    const { authError } = this.props;

    return (
      <Card style={{ minWidth: 400 }}>
        <Header>Login</Header>

        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <Input
              id="email"
              icon="envelope"
              iconPosition="left"
              placeholder="Email"
              value={email}
              onChange={this.handleInputChange}
            />
          </Form.Field>

          <Form.Field>
            <Input
              id="password"
              type="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              value={password}
              onChange={this.handleInputChange}
            />
          </Form.Field>

          {authError && <ErrorMessage>Error: {authError}</ErrorMessage>}

          <Button type="submit" style={styles.submitBtn}>
            Login
          </Button>
        </Form>

        <Button
          fluid
          socialType="facebook"
          style={styles.socialBtn}
          onClick={this.handleFacebookClick}
        >
          Sign in with Facebook
        </Button>
        {/* <Button fluid socialType="twitter" style={styles.socialBtn}>
          Sign in with Twitter
        </Button> */}
      </Card>
    );
  }
}
