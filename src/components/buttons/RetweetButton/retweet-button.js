import React from 'react';
import './retweet-button.css';

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <span aria-hidden="true" className="icon_loading" />
    {getRetweetCount(count)}
  </span>
);

export default RetweetButton;
