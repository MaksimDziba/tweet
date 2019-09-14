import React from 'react';
import PropTypes from 'prop-types';

import './avatar.css';

const Avatar = ({ hash }) => {
  var url = `./image/avatars/${hash}`;
  return (
    <div>
      <img src={url} className="avatar" alt="avatar" />
    </div>
  );
};

Avatar.propTypes = {
  hash: PropTypes.string,
};

export default Avatar;
