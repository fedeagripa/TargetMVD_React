import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as targetActions from '../actions/targetActions';
import Map from '../components/common/Map';

export const GoogleMapContainer = ({ targets, actions, newTarget, topics }) => {
  const location = {
    lat: -34.906498,
    lng: -56.185258
  };

  let markers = targets;
  return (
    <div className="map">
      <Map
        center={location}
        markers={markers}
        updateTargetInfo={actions.updateFreeTarget}
        newTarget={newTarget}
        topicsList={topics}
      />
    </div>
  );
};

GoogleMapContainer.propTypes = {
  targets: PropTypes.array,
  topics: PropTypes.array,
  newTarget: PropTypes.object,
  actions: PropTypes.object
};

const mapStateToProps = ({ targets, newTarget, topics }) => {
  return {
    targets,
    newTarget,
    topics
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(targetActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapContainer);
