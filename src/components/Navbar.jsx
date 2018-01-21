import React from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
  state = {
    activeItem: null,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="editorials"
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name="reviews"
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
