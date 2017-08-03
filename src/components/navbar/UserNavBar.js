import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { routes } from '../../constants/routesPaths';
import avatarExample from '../../assets/avatar-example.svg';
import { logout } from '../../actions/sessionActions';

const UserNavBar = ({ user }) => (
  <div>
    <h3>TARGET</h3>
    <div>
      <img src={user.image? user.image : avatarExample} className="avatar"/>
    </div>
    <b> {user.name} </b>
    <div>
      <Link id="edit" to={routes.edit} className="SIGN-UP"> Edit </Link>
      /
      <a onClick={logout} className="SIGN-UP"> Logout </a>
    </div>
    <div className="line"/>
  </div>
);

UserNavBar.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

const mapStateToProps = (state) => ({
  user: state.session.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNavBar);
