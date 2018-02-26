import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const StyledMessage = glamorous.div(
  {
    '&&&': {
      textAlign: 'center',
      marginBottom: 10,
      color: '#ffebcb',
    },
  },
  (props) => props.style,
);

export default function ErrorMessage({ children, ...rest }) {
  return <StyledMessage {...rest}>{children}</StyledMessage>;
}

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
