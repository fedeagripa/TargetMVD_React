import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { navbar_flow } from '../../constants/constants';
import HomeEmptyNav from './HomeEmptyNav';
import HomeNav from './HomeNav';
import WelcomeNav from './WelcomeNav';
import WhatsNav from './WhatsNav';
import HomeNoChatYetNav from './HomeNoChatYetNav';

class NavBar extends Component {
  showNavByState(step) {
    switch (step) {
      case navbar_flow.first_nav:
        return <WhatsNav />;
      case navbar_flow.second_nav:
        return <WelcomeNav />;
      case navbar_flow.third_nav:
        return <HomeNoChatYetNav />;
      case navbar_flow.fourth_nav:
        return <HomeEmptyNav />;
      case navbar_flow.fifth_nav:
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
