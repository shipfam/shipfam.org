import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Form } from 'semantic-ui-react';
import { Card, Button, Input, ErrorMessage } from '../components';

const styles = {
  card: {
    minWidth: 'fit-content',
  },
  button: {
    width: 200,
  },
  input: {
    width: 200,
    margin: 0,
  },
  socialBtn: {
    margin: '10px 0',
    fontSize: 20,
  },
};

const Header = glamorous.h1({
  '&&&': {
    fontFamily: 'D-DINCondensed',
    fontSize: '140px',
    lineHeight: '1em',
    color: 'white',
    textAlign: 'center',
    margin: 0,
  },
});

export default class SignUp extends React.Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
    authError: PropTypes.string,
    socialLogin: PropTypes.func.isRequired,
  };

  static defaultProps = {
    authError: '',
  };

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleFormSubmit = () => {
    const { email, password } = this.state;
    this.props.signUp(email, password);
  };

  handleFacebookClick = () => {
    this.props.socialLogin('facebook');
  };

  render() {
    const { firstName, lastName, email, password } = this.state;
    const { authError } = this.props;

    return (
      <Card style={styles.card}>
        <Header>SHIPFAM</Header>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group>
            <Form.Field>
              <Input
                id="firstName"
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <Input
                id="lastName"
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChange={this.handleInputChange}
              />
            </Form.Field>
          </Form.Group>

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

          <Form.Group>
            <Button type="submit" style={styles.button}>
              Sign Up
            </Button>
            <Button
              isLink
              to="/login"
              style={{ ...styles.button, marginLeft: 20 }}
            >
              Login
            </Button>
          </Form.Group>
        </Form>

        <Button
          fluid
          socialType="facebook"
          style={styles.socialBtn}
          onClick={this.handleFacebookClick}
        >
          Sign up with Facebook
        </Button>
        {/* <Button fluid socialType="twitter" style={styles.socialBtn}>
          Sign up with Twitter
        </Button> */}
      </Card>
    );
  }
}
