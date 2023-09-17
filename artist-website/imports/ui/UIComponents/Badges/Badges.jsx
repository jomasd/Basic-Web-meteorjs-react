import React from 'react';
import PropTypes from 'prop-types';
import './styles/Badges.css'; 

const Badge = ({ children, count }) => {
  return (
    <div className="badge-container">
      {children}
      <span className="badge-count">{count}</span>
    </div>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired,
};

export default Badge;
