import React from 'react';
import PropTypes from 'prop-types';
import './styles/Leader.css';

const Leader = ({ title, content }) => {
  return (
    <div className="leader-container">
      <span className="leader-title">{title}</span>
      <span className="leader-dots"></span>
      <span className="leader-content">{content}</span>
    </div>
  );
};

Leader.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Leader;
