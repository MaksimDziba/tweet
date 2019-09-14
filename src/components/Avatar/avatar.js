import React from 'react';
import './avatar.css';

const Avatar = ({ hash }) => {
  var url = `./image/avatars/${hash}`;
  return (
    <div>
      <img src={url} className="avatar" alt="avatar" />
    </div>
  );
};

export default Avatar;
