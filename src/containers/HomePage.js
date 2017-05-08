import React from 'react';
/*import LogoutButton from '../components/session/LogoutButton';*/
import NavBar from '../components/navbar/NavBar';
import GoogleMapContainer from '../components/content/MapContent';

const HomePage = () => (
  <div className="home-menu-open">
    <NavBar step={1} />
    <GoogleMapContainer />
  </div>
);

export default HomePage;
