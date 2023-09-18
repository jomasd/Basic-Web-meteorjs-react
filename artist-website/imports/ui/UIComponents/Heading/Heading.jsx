import React from 'react';
import PropTypes from 'prop-types';
import './styles/Heading.css';

const Heading = ({ level, text }) => {
  const Tag = `h${level}`;

  return (
    <Tag className={`custom-heading h${level}`}>
      {text}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  text: PropTypes.string.isRequired,
};

export default Heading;
