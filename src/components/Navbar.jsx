import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { css } from 'react-emotion';

function Navbar(props) {
  const { onItemClick, itemText } = props;

  return (
    <Menu className={css({ position: 'fixed', top: 0, width: '100%' })}>
      <Menu.Item name="auth" onClick={onItemClick}>
        {itemText}
      </Menu.Item>
    </Menu>
  );
}

Navbar.propTypes = {
  onItemClick: PropTypes.func,
  itemText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  onItemClick: () => {},
};

export default Navbar;
