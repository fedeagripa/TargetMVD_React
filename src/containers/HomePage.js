import React from 'react';
/*import LogoutButton from '../components/session/LogoutButton';*/
import NavBar from '../components/navbar/NavBar';
import GoogleMapContainer from '../components/content/MapContent';

const HomePage = () => (
  <div className="home-menu-open">
    <NavBar />
    <GoogleMapContainer />
  </div>
);

export default HomePage;
