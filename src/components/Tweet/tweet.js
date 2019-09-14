import React from 'react';
import Avatar from '../Avatar';
import Message from '../Message';
import Time from '../Time';
import NameWithHandle from '../NameWithHandle';
import ReplyButton from '../buttons/ReplyButton';
import RetweetButton from '../buttons/RetweetButton';
import LikeButton from '../buttons/LikeButton';
import MoreOptionsButton from '../buttons/MoreOptionsButton';
import './tweet.css';

const Tweet = ({ ...tweet }) => {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
