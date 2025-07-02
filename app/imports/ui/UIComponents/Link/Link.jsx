import React from 'react';
import PropTypes from 'prop-types';
import './styles/Link.css';

const Link = ({ to, label, external }) => {
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className="custom-link">
        {label}
      </a>
    );
  }

  return (
    <a href={to} className="custom-link">
      {label}
    </a>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

Link.defaultProps = {
  external: false,
};

export default Link;
