import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import { routes } from '../../constants/routesPaths';
import { Link } from 'react-router';

class SideBar extends Component {

  render() {
    return (
      <Menu width={320}>
        <Link id="about" className="menu-item" to={routes.about}>About</Link>
        <Link id="contact" className="menu-item" to={routes.contact}>Contact</Link>
      </Menu>
    );
  }
}

export default reduxBurgerMenu(SideBar);
