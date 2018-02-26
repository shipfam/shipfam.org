import React from 'react';
import PropTypes from 'prop-types';
import { Card as SemanticCard } from 'semantic-ui-react';
import glamorous from 'glamorous';

import theme from '../theme';

const StyledCard = glamorous(SemanticCard)(
  {
    '&&&': {
      background: theme.palette.opaqueBlack,
      boxShadow: 'none',
      width: 'fit-content',
      borderRadius: '10px',
    },
  },
  (props) => props.style,
);

export default function Card({ header, children, ...rest }) {
  return (
    <StyledCard {...rest}>
      {header && <SemanticCard.Header>{header}</SemanticCard.Header>}
      <SemanticCard.Content>{children}</SemanticCard.Content>
    </StyledCard>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
};

Card.defaultProps = {
  header: null,
};
