import React from 'react';
import './like-button.css';

const LikeButton = ({ count }) => (
  <span className="like-button">
    <span aria-hidden="true" className="icon_heart_alt" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);

export default LikeButton;
