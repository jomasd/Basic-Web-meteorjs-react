import React from 'react';
import PropTypes from 'prop-types';
import './styles/Container.css';

const Container = ({ children, maxWidth }) => {
  return (
    <div className="container" style={{ maxWidth: maxWidth }}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
};

Container.defaultProps = {
  maxWidth: '100%',
};

export default Container;
