import React from 'react';
import ChatLine from '../components/chat/ChatLine';
import '../styles/media.scss';
import littleSmilies from '../assets/little-smilies.svg';

const ChatContainer = () => (
  <div>
    <div className="light-line"/>
    <ChatLine image="" name="Jhon" comment="Hi guys"/>
    <ChatLine image="" name="Murphy" comment="Hi guys"/>
    <ChatLine image="" name="Dilan" comment="Hi guys"/>
    <div>
      <img src={littleSmilies} className="bitmap"/>
    </div>
  </div>
);

export default ChatContainer;
