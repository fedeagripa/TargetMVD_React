import React from 'react';
import smilies from '../../assets/smilies.svg';

const WelcomeNav = () => (
  <div>
    <div>
      <img src={smilies} className="smilies"/>
    </div>
    <div>
      <h3>Welcome to TARGET</h3>
    </div>
    <div>
      <h4> Find people near you & Connect </h4>
    </div>
    <div className="separate-div">
      <p> Create a  target  by clicking wherever on the map, specify  the ratio and and a topic: Travel, Dating, Music, etc. </p>
    </div>
    <div>
      <p> <b>TARGET</b> will  start a chat whenever you’ve a match. You can always dismiss a conversation if you’re not interested. </p>
    </div>
    <div className="separate-div">
      <button className="black-btn-large"> OK; GOT IT! </button>
    </div>
  </div>
);

export default WelcomeNav;
