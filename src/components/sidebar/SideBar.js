import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';

class SideBar extends Component {

  render() {
    return (
      <Menu width={320}>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    );
  }
}

export default reduxBurgerMenu(SideBar);
