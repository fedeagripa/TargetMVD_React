import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { routes } from '../../constants/routesPaths';
import * as sessionActions from '../../actions/sessionActions';
import smilies from '../../assets/smilies.svg';
import EditForm from '../user/EditForm';
import Avatar from '../common/Avatar';

const EditUser = ({ user, actions: { edit } }) => (
  <div className="full-div">
    <div className="header-blue">
      <h3> EDIT PROFILE </h3>
    </div>
    <div>
      <Avatar />
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
