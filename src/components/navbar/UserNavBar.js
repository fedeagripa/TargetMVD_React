import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { routes } from '../../constants/routesPaths';
import avatarExample from '../../assets/avatar-example.svg';
import { changeEditing } from '../../actions/navbarActions';

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
      <Link to={routes.logout} className="SIGN-UP"> Logout </Link>
    </div>
    <div className="line"/>
  </div>
);

UserNavBar.propTypes = {
  user: PropTypes.object,
  changeEditing: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  changeEditing: () => dispatch(changeEditing()),
});

const mapStateToProps = (state) => ({
  user: state.session.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNavBar);
