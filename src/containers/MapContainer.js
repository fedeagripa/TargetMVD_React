import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { default_map_position } from '../constants/constants';
import * as targetActions from '../actions/targetActions';
import Map from '../components/common/Map';

export const GoogleMapContainer = ({ targets, actions, newTarget, topics }) => {
  const location = default_map_position;

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
  const topicsList = topics.values;
  return {
    targets,
    newTarget,
    topicsList
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
