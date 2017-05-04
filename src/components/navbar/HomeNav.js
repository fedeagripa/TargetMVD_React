import React from 'react';
import { Link } from 'react-router';
import { routes } from '../../constants/routesPaths';
import avatarExample from '../../assets/avatar-example.svg';
import ChatContainer from '../chat/ChatContainer';
import '../../styles/media.scss';

const HomeNav = () => (
  <div>
    <h3>TARGET</h3>
    <div>
      <img src={avatarExample} className="avatar"/>
    </div>
    <b> fede </b>
    <div>
      <Link to={routes.editProfile} className="SIGN-UP"> Edit </Link>
      /
      <Link to={routes.logOut} className="SIGN-UP"> Logout </Link>
    </div>
    <div className="line"/>
    <div className="separate-div">
      <b> Chat </b>
      <ChatContainer />
    </div>
  </div>
);

export default HomeNav;
