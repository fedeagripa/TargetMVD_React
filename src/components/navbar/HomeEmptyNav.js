import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { changeStep } from '../../actions/navbarActions';
import { getTopics } from '../../actions/topicActions';
import smilies from '../../assets/smilies.svg';
import UserNavBar from './UserNavBar';
import TopicList from '../topics/TopicList';

class HomeEmptyNav extends Component {

  componentWillMount() {
    this.props.getTopics();
  }

  render() {
    return (
      <div>
        <UserNavBar />
        <div className="separate-div">
          <h4> Create your first target by clicking wherever on the map. </h4>
        </div>
        <div className="separate-div">
          <b> Psss!, these are the most poopular targets: </b>
          <TopicList topics={this.props.topics} />
        </div>
        <div className="separate-div">
          <img src={smilies} className="smilies-small" onClick={this.props.changeStep}/>
        </div>
      </div>
    );
  }
}

HomeEmptyNav.propTypes = {
  changeStep: PropTypes.func,
  getTopics: PropTypes.func,
  topics: PropTypes.array
};

const mapStateToProps = (state) => ({
  topics: state.topics.values
});

const mapDispatchToProps = (dispatch) => ({
  changeStep: () => dispatch(changeStep()),
  getTopics: () => dispatch(getTopics()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeEmptyNav);
