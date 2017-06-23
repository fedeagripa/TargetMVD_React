import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import smilies from '../../assets/smilies.svg';
import { changeStep } from '../../actions/navbarActions';

class WelcomeNav extends Component {

  render() {
    return (
      <div className="long-container">
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
          <ul className="blue-dots">
            <li>
              <p> Create a  target  by clicking wherever on the map, specify  the ratio and and a topic: Travel, Dating, Music, etc. </p>
            </li>
            <li>
              <p> <b>TARGET</b> will  start a chat whenever you’ve a match. You can always dismiss a conversation if you’re not interested. </p>
            </li>
          </ul>
        </div>
        <div className="separate-div">
          <button onClick={this.props.changeStep}
                  className="black-btn-large">
                  OK; GOT IT!
          </button>
        </div>
      </div>
    );
  }
}

WelcomeNav.propTypes = {
  changeStep: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  changeStep: () => dispatch(changeStep()),
});

export default connect(null, mapDispatchToProps)(WelcomeNav);
