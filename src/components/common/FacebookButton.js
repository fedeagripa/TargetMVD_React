import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { face_app_key } from '../../constants/constants';
import { facebookLogin } from '../../actions/sessionActions';

class FacebookButton extends Component {

  render() {
    return (
      <FacebookLogin
        appId={face_app_key}
        autoLoad={true}
        fields="name,email,picture"
        cssClass="facebook-button"
        callback={this.props.login}
      />
    );
  }
}

FacebookButton.propTypes = {
  login: PropTypes.func
};

const MapDispatchToProps = (dispatch) => ({
  login: (response) => dispatch(facebookLogin(response)),
});

export default connect(null, MapDispatchToProps)(FacebookButton);
