import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import GoogleMapContainer from '../components/content/MapContent';

const withContent = (WrappedComponent) => {
  const ConnectContent = () => (
    <div className="home-menu-open">
      <SideBar/>
      <div className="myNav">
        <WrappedComponent />
      </div>
      <GoogleMapContainer />
    </div>
  );
  return ConnectContent;
};

export default withContent;
