import React from 'react';
import PropTypes from 'prop-types';
import './styles/SVG.css';

const SVG = ({ path, width, height, fill }) => {
  return (
    <svg className="svg-icon" viewBox="0 0 20 20" width={width} height={height} fill={fill}>
      <path d={path} />
    </svg>
  );
};

SVG.propTypes = {
  path: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

SVG.defaultProps = {
  width: '20px',
  height: '20px',
  fill: '#000000',
};

export default SVG;
