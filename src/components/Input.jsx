import React from 'react';
import glamorous from 'glamorous';
import { Input as SemanticInput } from 'semantic-ui-react';
import theme from '../theme';

const StyledInput = glamorous(SemanticInput)(
  {
    '&&&': {
      display: 'flex',
      height: 55,
      margin: '10px 0',
      '& input': {
        backgroundColor: theme.palette.controls,
        opacity: 0.74,
        color: '#FFF',
        '&:active, &:hover, &:focus': {
          borderColor: 'rgb(252, 177, 171)',
          backgroundColor: theme.palette.controls,
          color: '#FFF',
        },
      },
    },
  },
  (props) => props.style,
);

export default function Input(props) {
  return <StyledInput {...props} />;
}
