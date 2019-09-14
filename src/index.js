import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const testTweet = {
  message: 'Something about cats.',
  gravatar: 'some_user.jpg',
  author: { handle: 'catperson', name: 'IAMA Cat Person' },
  likes: 2,
  retweets: 3,
  timestamp: '2016-07-30 21:24:37',
};

ReactDOM.render(<App tweet={testTweet} />, document.getElementById('root'));
