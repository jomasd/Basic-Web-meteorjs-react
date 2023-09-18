import React from 'react';
import PropTypes from 'prop-types';
import './styles/Grid.css';

const Grid = ({ columns, children }) => {
  return (
    <div className={`custom-grid grid-${columns}`}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  columns: PropTypes.oneOf([1, 2, 3, 4, 6, 12]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Grid;
