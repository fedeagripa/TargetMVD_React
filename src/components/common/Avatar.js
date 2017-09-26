import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import avatarExample from '../../assets/avatar-example.svg';
import { edit } from '../../actions/sessionActions';

class Avatar extends Component {

  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);

  }

  onChange(e) {
    const file = e.target.files[0];
    const options = { orientation: true };
    const updateResults = (img) => {
      const avatar64 = img.toDataURL();
      this.props.editImage(avatar64, this.props.user.id);
    };
    const loadImage = require('blueimp-load-image');
    loadImage(file, updateResults, options);
  }

  render() {
    const { user } = this.props;
    return (
      <div className="small-separation" onClick={() => this.avatarInput.click()}>
        <img src={user.image? user.image : avatarExample} className="avatar"/>
         <input
            className="hidden"
            name="avatarPic"
            accept="image/*"
            onChange={this.onChange}
            type="file"
            ref={(input) => {
              this.avatarInput = input;
            }}
        />
        <div>
          <b> {user.name} </b>
        </div>
      </div>
    );
  }
}

Avatar.propTypes = {
  user: PropTypes.object,
  editImage: PropTypes.func
};

const mapStateToProps = (state) => ({
  user: state.session.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    editImage: (image, id) => dispatch(edit(image, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
