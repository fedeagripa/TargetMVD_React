import React from 'react';
import ChatLine from './ChatLine';
import littleSmilies from '../../assets/little-smilies.svg';
import '../../styles/media.scss';

const ChatContainer = () => (
  <div className="small-separation">
    <div className="light-line"/>
    <ChatLine image="" name="Jhon" comment="Hi guys"/>
    <ChatLine image="" name="Murphy" comment="Hi guys"/>
    <ChatLine image="" name="Dilan" comment="Hi guys"/>
    <div className="separate-div">
      <img src={littleSmilies}/>
    </div>
  </div>
);

export default ChatContainer;
