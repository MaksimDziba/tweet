import React from 'react';
import moment from 'moment';
import './time.css';

const Time = ({ time }) => {
  let timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

export default Time;
