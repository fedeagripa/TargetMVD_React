import React, { PropTypes } from 'react';
import topicImage from '../../assets/football.png';
import person from '../../assets/person4.jpeg';

const ChatLine = ({ name, image, comment, topic }) => (
  <div>
    <div className="left">
      <img src={person} className="rounded"/>
    </div>
    <div className="toRight">
      <img src={topicImage} className="bitmap"/>
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
