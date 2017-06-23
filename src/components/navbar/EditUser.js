import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routes } from '../../constants/routesPaths';
import * as sessionActions from '../../actions/sessionActions';
import avatarExample from '../../assets/avatar-example.svg';
import smilies from '../../assets/smilies.svg';
import EditForm from '../user/EditForm';

export const EditUser = ({ user, actions: { edit } }) => (
  <div className="full-div">
    <div className="header-blue">
      <h3> EDIT PROFILE </h3>
    </div>
    <div>
      <div className="small-separation">
        <img src={avatarExample} className="avatar"/>
      </div>
      <div>
        <b> {user.name} </b>
      </div>
      <div className="small-separation">
        <EditForm onSubmit={(data) => edit(data, user.userId)}/>
      </div>
      <div className="small-separation">
        <Link to={routes.logout} className="SIGN-UP"> Delete my TARGET account </Link>
      </div>
      <div className="small-separation">
        <img src={smilies} className="smilies-small" />
      </div>
    </div>
  </div>
);

const { object } = PropTypes;

EditUser.propTypes = {
  actions: object.isRequired,
  user: object
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

const mapStateToProps = (state) => ({
  user: state.session.user,
});

export default connect(mapStateToProps, mapDispatch)(EditUser);
