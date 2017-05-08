import React, { PropTypes } from 'react';
import HomeEmptyNav from './HomeEmptyNav';
import HomeNav from './HomeNav';
import WelcomeNav from './WelcomeNav';

class NavBar extends React.Component {
  showNavByState(state) {
    switch (state) {
      case 1:
        return <WelcomeNav />;
      case 2:
        return <HomeEmptyNav />
      case 3:
        return <HomeNav />
    }
  }

  render () {
    return (
      <div className="myNav">
        {this.showNavByState(this.props.step)}
      </div>
    );
  }
}

NavBar.propTypes = {
  step: PropTypes.number.isRequired
};

export default NavBar;
