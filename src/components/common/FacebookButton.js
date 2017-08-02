import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { faceAppKey } from '../../constants/constants';
import { facebookLogin } from '../../actions/sessionActions';

const FacebookButton = ({ login }) => {
  return (
    <FacebookLogin
      appId={faceAppKey}
      autoLoad
      fields="name,email,picture"
      cssClass="facebook-button"
      callback={login}
    />
  );
};

FacebookButton.propTypes = {
  login: PropTypes.func
};

const MapDispatchToProps = (dispatch) => ({
  login: (response) => dispatch(facebookLogin(response)),
});

export default connect(null, MapDispatchToProps)(FacebookButton);
