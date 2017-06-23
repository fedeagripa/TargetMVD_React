import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import HomeEmptyNav from './HomeEmptyNav';
import HomeNav from './HomeNav';
import WelcomeNav from './WelcomeNav';
import WhatsNav from './WhatsNav';
import HomeNoChatYetNav from './HomeNoChatYetNav';

class NavBar extends Component {
  showNavByState(step) {
    switch (step) {
      case 1:
        return <WhatsNav />;
      case 2:
        return <WelcomeNav />;
      case 3:
        return <HomeNoChatYetNav />;
      case 4:
        return <HomeEmptyNav />;
      case 5:
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
