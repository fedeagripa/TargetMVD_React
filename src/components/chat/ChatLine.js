import React, { PropTypes } from 'react';
import littleSmilies from '../../assets/little-smilies.svg';

const ChatLine = ({ name, image, comment, topic }) => (
  <div>
    <div className="left">
      <img src={littleSmilies} className="bitmap"/>
    </div>
    <div className="toRight">
      <img src={littleSmilies} className="bitmap"/>
    </div>
    <span className="middle text-left">
      <b>{name}</b>
      <p>{comment}</p>
      <p>{image}</p>
      <p>{topic}</p>
    </span>
    <div className="light-line"/>
  </div>
);

const { string } = PropTypes;

ChatLine.propTypes = {
  name: string,
  image: string,
  comment: string,
  topic: string,
};

export default ChatLine;
