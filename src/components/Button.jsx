import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button as SemanticButton, Icon } from 'semantic-ui-react';
import glamorous from 'glamorous';
import stylePropType from 'react-style-proptype';
import theme from '../theme';

function styleComponent(Component) {
  return glamorous(Component)(
    {
      '&&&': {
        display: 'block',
        borderRadius: 10,
        lineHeight: '55px',
        opacity: 0.74,
        color: 'white',
        textAlign: 'center',
        transition: 'all 0.3s',
        padding: 0,
        margin: 0,
        ...theme.fontObj,
        '&:active, &:hover, &:focus': {
          opacity: 0.9,
        },
        '&:focus': {
          outline: 'auto',
        },
      },
    },
    (props) => ({
      '&&&': {
        backgroundColor: theme.palette.controls,
        ...props.style,
      },
    }),
  );
}

export default function Button({
  children,
  isLink,
  to,
  socialType,
  style,
  ...rest
}) {
  let StyledButton;
  const appliedProps = {
    style: { ...style },
    ...rest,
  };

  if (isLink) {
    StyledButton = styleComponent(NavLink);
    appliedProps.to = to;
  } else {
    StyledButton = styleComponent(SemanticButton);
    if (socialType) {
      appliedProps.type = socialType;
      appliedProps.color = socialType;
      appliedProps.style.opacity = 1;
      appliedProps.style.backgroundColor = null;
    }
  }

  return (
    <StyledButton {...appliedProps}>
      {socialType && <Icon name={socialType} />}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLink: PropTypes.bool,
  socialType: PropTypes.oneOf(['facebook', 'twitter', 'google plus']),
  style: stylePropType,
  to: PropTypes.string,
};

Button.defaultProps = {
  isLink: false,
  style: {},
  to: '',
  socialType: null,
};
