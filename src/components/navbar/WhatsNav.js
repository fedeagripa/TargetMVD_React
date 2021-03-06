import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import smilies from '../../assets/smilies.svg';
import { returnToSteps } from '../../actions/navbarActions';

class WhatsNav extends Component {

  render() {
    return (
      <div>
        <div className="header-blue">
          <h3> WHAT'S TARGET? </h3>
          <h3 onClick={this.props.returnToSteps} className="force-right"> X </h3>
        </div>
        <div className="long-container small-separation">
          <p> Cat ipsum dolor sit amet, scratch the furniture. Spit up on light gray carpet instead of adjacent linoleum cough furball yet lounge in doorway but gnaw the corn cob and sit by the fire rub face on everything. Flop over under the bed, or immediately regret falling into bathtub but swat turds around the house. All of a sudden cat goes crazy bleghbleghvomit my furball really tie the room together for destroy couch. Need to chase tail inspect anything brought into the house, yet sleep on dog bed, force dog to sleep on floor. Cat snacks. Eat owner's food nap all day, for chase imaginary bugs, yet throwup on your pillow. Bleghbleghvomit my furball really tie the room together sun bathe attack the dog then pretend like nothing happened Gate keepers of hell and destroy couch, so find empty spot in cupboard and sleep all day groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked!. </p>
        </div>
        <div className="separate-div">
          <img src={smilies} className="smilies-small" onClick={this.props.returnToSteps}/>
        </div>
      </div>
    );
  }
}

WhatsNav.propTypes = {
  returnToSteps: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  returnToSteps: () => dispatch(returnToSteps()),
});

export default connect(null, mapDispatchToProps)(WhatsNav);
