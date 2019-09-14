import React from 'react';
import PropTypes from 'prop-types';
import Tweet from '../Tweet';

import './app.css';

const App = ({ tweet }) => {
  return (
    <div className="container">
      <Tweet {...tweet} />
    </div>
  );
};

App.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string.isRequired,
    gravatar: PropTypes.string.isRequired,
    author: PropTypes.shape({
      handle: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    likes: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
