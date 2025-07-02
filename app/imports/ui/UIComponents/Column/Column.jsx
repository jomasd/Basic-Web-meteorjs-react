import React from 'react';
import PropTypes from 'prop-types';
import './styles/Column.css';

const ColumnLayout = ({ children, spacing }) => {
  return (
    <div className={`column-layout ${spacing}`}>
      {children}
    </div>
  );
};

ColumnLayout.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.string,
};

ColumnLayout.defaultProps = {
  spacing: 'normal',
};

export default ColumnLayout;
