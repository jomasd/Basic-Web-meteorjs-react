import React from 'react';
import PropTypes from 'prop-types';
import './styles/Label.css';

const Label = ({ content, type }) => {
  const labelClass = `label label-${type}`;
  return (
    <span className={labelClass}>
      {content}
    </span>
  );
};

Label.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['important', 'highlight']).isRequired,
};

export default Label;
