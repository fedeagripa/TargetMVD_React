import React from 'react';
import ChatContainer from '../chat/ChatContainer';
import UserNavBar from './UserNavBar';
import '../../styles/media.scss';

const HomeNav = () => (
  <div className="separate-div">
    <UserNavBar />
    <b> Chat </b>
    <ChatContainer />
  </div>
);

export default HomeNav;
