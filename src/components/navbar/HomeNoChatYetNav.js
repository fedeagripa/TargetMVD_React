import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { changeStep } from '../../actions/navbarActions';
import smilies from '../../assets/smilies.svg';
import UserNavBar from './UserNavBar';

class HomeNoChatYetNav extends Component {

  render() {
    return (
      <div>
        <UserNavBar />
        <div className="separate-div">
          <h4> There not matches for your targets yet </h4>
        </div>
        <div className="separate-div">
          <img src={smilies} className="smilies-small" onClick={this.props.changeStep}/>
        </div>
      </div>
    );
  }
}

HomeNoChatYetNav.propTypes = {
  changeStep: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  changeStep: () => dispatch(changeStep()),
});

export default connect(null, mapDispatchToProps)(HomeNoChatYetNav);
