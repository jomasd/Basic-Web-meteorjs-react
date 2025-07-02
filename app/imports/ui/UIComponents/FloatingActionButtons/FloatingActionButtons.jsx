import React from 'react';
import './styles/FloatingActionButtons.css';

const FloatingActionButtons = ({ onClick }) => {
  return (
    <div className="fab" onClick={onClick}>
      <span className="material-icons">add</span>
    </div>
  );
};

export default FloatingActionButtons;
