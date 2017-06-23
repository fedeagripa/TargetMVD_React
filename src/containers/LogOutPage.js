import { PropTypes, Component } from 'react';
import { logout } from '../actions/sessionActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class LogOutPage extends Component {
  componentWillMount () {
    this.props.dispatch(logout());
    this.props.router.replace('/');
  }

  render () {
    return null;
  }
}

LogOutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
};

export default connect()(withRouter(LogOutPage));
