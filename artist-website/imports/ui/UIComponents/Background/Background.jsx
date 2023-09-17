import React from 'react';
import PropTypes from 'prop-types';
import './styles/Background.css';

const Background = ({ children, type }) => {
  return (
    <div className={`background background-${type}`}>
      {children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['solid', 'gradient', 'image']).isRequired,
};

export default Background;
