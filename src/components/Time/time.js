import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './time.css';

const Time = ({ time }) => {
  let timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

Time.propTypes = {
  time: PropTypes.string,
};

export default Time;
