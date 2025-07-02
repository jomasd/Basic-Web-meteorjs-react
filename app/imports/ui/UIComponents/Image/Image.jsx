import React from 'react';
import PropTypes from 'prop-types';
import './styles/Image.css';

const Image = ({ src, alt, rounded, className }) => {
  const classes = `custom-image ${rounded ? 'rounded' : ''} ${className}`;
  return (
    <img src={src} alt={alt} className={classes} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  rounded: PropTypes.bool,
  className: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
  rounded: false,
  className: '',
};

export default Image;
