import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { navbarFlow } from '../../constants/constants';
import HomeEmptyNav from './HomeEmptyNav';
import HomeNav from './HomeNav';
import WelcomeNav from './WelcomeNav';
import HomeNoChatYetNav from './HomeNoChatYetNav';

class NavBar extends Component {
  showNavByState(step) {
    switch (step) {
      case navbarFlow.first_nav:
        return <WelcomeNav />;
      case navbarFlow.second_nav:
        return <HomeNoChatYetNav />;
      case navbarFlow.third_nav:
        return <HomeEmptyNav />;
      case navbarFlow.fourth_nav:
        return <HomeNav />;
    }
  }

  render () {
    return (
      <div>
        {this.showNavByState(this.props.step)}
      </div>
    );
  }
}

NavBar.propTypes = {
  step: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  step: state.navbar.step
});

export default connect(mapStateToProps, null)(NavBar);
