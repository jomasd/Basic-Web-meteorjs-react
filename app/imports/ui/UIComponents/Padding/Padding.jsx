import React from 'react';
import './styles/Padding.css';

const Padding = ({ children, size }) => {
  return <div className={`padding-${size}`}>{children}</div>;
};

export default Padding;
