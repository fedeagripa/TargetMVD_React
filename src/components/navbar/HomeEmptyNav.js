import React from 'react';
import { Link } from 'react-router';
import { routes } from '../../constants/routesPaths';
import avatarExample from '../../assets/avatar-example.svg';
import smilies from '../../assets/smilies.svg';

const HomeEmptyNav = () => (
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
      <h3> Create your first target by clicking wherever on the map. </h3>
    </div>
    <div className="separate-div">
      <p> Psss!, these are the most poopular targets: </p>
      <ul>
        <li> Football </li>
        <li> Travel </li>
        <li> Music </li>
      </ul>
    </div>
    <div className="separate-div">
      <img src={smilies} className="smilies"/>
    </div>
  </div>
);

export default HomeEmptyNav;
