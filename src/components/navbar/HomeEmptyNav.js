import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { changeStep } from '../../actions/navbarActions';
import smilies from '../../assets/smilies.svg';
import UserNavBar from './UserNavBar';

class HomeEmptyNav extends Component {

  render() {
    return (
      <div>
        <UserNavBar />
        <div className="separate-div">
          <h4> Create your first target by clicking wherever on the map. </h4>
        </div>
        <div className="separate-div">
          <b> Psss!, these are the most poopular targets: </b>
          <ul>
            <li className="topic-list topic-football"> Football </li>
            <li className="topic-list topic-movies"> Movies </li>
            <li className="topic-list topic-music"> Music </li>
          </ul>
        </div>
        <div className="separate-div">
          <img src={smilies} className="smilies-small" onClick={this.props.changeStep}/>
        </div>
      </div>
    );
  }
}

HomeEmptyNav.propTypes = {
  changeStep: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  changeStep: () => dispatch(changeStep()),
});

export default connect(null, mapDispatchToProps)(HomeEmptyNav);
