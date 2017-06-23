import React, { PropTypes } from 'react';
//import { Link } from 'react-router';
import { connect } from 'react-redux';
//import { routes } from '../../constants/routesPaths';
import avatarExample from '../../assets/avatar-example.svg';
import { changeEditing } from '../../actions/navbarActions';
import { logout } from '../../actions/sessionActions';

const UserNavBar = ({ user, changeEditing }) => (
  <div>
    <h3>TARGET</h3>
    <div>
      <img src={avatarExample} className="avatar"/>
    </div>
    <b> {user.name} </b>
    <div>
      <a onClick={changeEditing} className="SIGN-UP"> Edit </a>
      /
      <a onClick={logout} className="SIGN-UP"> Logout </a>
    </div>
    <div className="line"/>
  </div>
);

UserNavBar.propTypes = {
  user: PropTypes.object,
  changeEditing: PropTypes.func,
  logout: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  changeEditing: () => dispatch(changeEditing()),
  logout: () => dispatch(logout()),
});

const mapStateToProps = (state) => ({
  user: state.session.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNavBar);
