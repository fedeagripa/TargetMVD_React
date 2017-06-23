import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import { getMyPosition } from '../../utils/mapHelper';
import { setMyPosition } from '../../actions/mapActions';

class Map extends Component {
  constructor(props, context) {
    super(props, context);

    this.onMapClick = this.onMapClick.bind(this);
    this.getPositionSuccess = this.getPositionSuccess.bind(this);
    this.getPositionError = this.getPositionError.bind(this);
    this.getOpts = this.getOpts.bind(this);
    this.handleMapMounted = this.handleMapMounted.bind(this);
    this.handleCenterChanged = this.handleCenterChanged.bind(this);
    getMyPosition(this.getPositionSuccess, this.getPositionError);
  }

  handleMapMounted(map) {
    this._map = map;
  }

  handleCenterChanged(targetSelected) {
    const mapMovement = this._map.getCenter();
    let nextCenter = targetSelected || {
      lat: parseFloat(mapMovement.lat().toFixed(6)),
      lng: parseFloat(mapMovement.lng().toFixed(6))
    };

    let newState = Object.assign({}, this.state);
    newState.locationCenter.lat = nextCenter.lat;
    newState.locationCenter.lng = nextCenter.lng;
    if (newState.locationCenter.lat === this.state.locationCenter.lat &&
      newState.locationCenter.lng === this.state.locationCenter.lng &&
      targetSelected === null) {
      // Notice: Check nextCenter equality here,
      // or it will fire center_changed event infinitely
      return;
    }
    this.setState(newState);
  }

  getOpts(venue) {
    let icon = '';
    if (venue.topic !== null) {
      icon = venue.topic.icon;
    }
    let opts = {};
    if (icon !== '') {
      opts.icon = {
        url: icon,
        origin: { x: 0, y: 0 },
        anchor: { x: 16, y: 14 },
        scaledSize: { height: 28, width: 28 }
      };
    }
    return opts;
  }

  getPositionSuccess(pos) {
    const crd = pos.coords;
    const lat = parseFloat(crd.latitude.toFixed(6));
    const lng = parseFloat(crd.longitude.toFixed(6));
    this.props.setMyPosition({ lat, lng });
  }

  getPositionError(err) {
    console.warn(`ERROR( ${err.code} ):  ${err.message}`);
  }

  onMapClick(e) {
    let lat = parseFloat(e.latLng.lat().toFixed(6));
    let lng = parseFloat(e.latLng.lng().toFixed(6));
    this.props.updateTargetInfo("lat", lat, "lng", lng, "isVisible", true);
  }

  render() {
    const mapContainer = <div className="mapContainer" />;
    let markers = [<Marker key={1} position={this.props.myPositionCoords} />];

    return (
      <GoogleMapLoader
        containerElement={mapContainer}
        googleMapElement={
          <GoogleMap
            defaultZoom={15}
            center={this.props.myPositionCoords}
            ref={this.handleMapMounted}
            options={{ streetViewControl: false, mapTypeControl: false }}>
            { markers }
          </GoogleMap>
        }
      />
    );
  }
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  markers: PropTypes.array,
  updateTargetInfo: PropTypes.func,
  topicsList: PropTypes.array,
  newTarget: PropTypes.object,
  myPositionCoords: PropTypes.object,
  setMyPosition: PropTypes.func
};

const mapStateToProps = (state) => ({
  myPositionCoords: state.map.myPositionCoords,
});

const mapDispatchToProps = (dispatch) => ({
  setMyPosition: (position) => dispatch(setMyPosition(position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
