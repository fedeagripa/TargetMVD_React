import React, { PropTypes } from 'react';

const TopicList = ({ topics }) => {
  return (
		<ul>
			{topics.map(topic =>
				<li key={topic.topicId}>
					<div className="images-list">
						<div> <img src={topic.icon} /> </div>
						<div className="text-container"> <p>{topic.label}</p> </div>
					</div>
				</li>
			)}
		</ul>
  );
};

TopicList.propTypes = {
  topics: PropTypes.array
};

export default TopicList;
