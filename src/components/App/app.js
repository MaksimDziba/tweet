import React from 'react';
import Tweet from '../Tweet';

import './app.css';

const App = ({ tweet }) => {
  return (
    <div className="container">
      <Tweet {...tweet} />
    </div>
  );
};

export default App;
