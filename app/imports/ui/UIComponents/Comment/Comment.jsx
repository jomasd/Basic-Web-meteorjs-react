import React from 'react';
import PropTypes from 'prop-types';
import './styles/Comment.css';

const Comment = ({ author, content, timestamp }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-author">{author}</span>
        <span className="comment-timestamp">{timestamp}</span>
      </div>
      <div className="comment-content">
        {content}
      </div>
    </div>
  );
};

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Comment;
