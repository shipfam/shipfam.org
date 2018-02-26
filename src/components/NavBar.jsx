import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Button from './Button';

const styles = {
  links: {
    width: 140,
  },
};

const Wrapper = glamorous.div({
  position: 'absolute',
  top: 40,
  right: 40,
  display: 'flex',
  justifyContent: 'flex-end',
});

export default function NavBar(props) {
  return (
    <Wrapper>
      {props.isLoggedIn ? (
        <Button onClick={props.signOut} style={styles.links}>
          Sign Out
        </Button>
      ) : (
        <React.Fragment>
          <Button isLink to="/signup" style={styles.links}>
            Sign Up
          </Button>
          <Button
            isLink
            to="/login"
            style={{ ...styles.links, marginLeft: 30 }}
          >
            Login
          </Button>
        </React.Fragment>
      )}
    </Wrapper>
  );
}

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
};
