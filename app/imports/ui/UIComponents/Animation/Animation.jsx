import React from 'react';
import PropTypes from 'prop-types';
import './styles/Animation.css';

const Animation = ({ type, duration, children }) => {
  return (
    <div className={`animation-container animation-${type}`} style={{ animationDuration: `${duration}s` }}>
      {children}
    </div>
  );
};

Animation.propTypes = {
  type: PropTypes.string.isRequired,
  duration: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Animation.defaultProps = {
  duration: 1,
};

export default Animation;
