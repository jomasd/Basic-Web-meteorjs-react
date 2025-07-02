import React from 'react';
import './styles/Overlay.css';

const Overlay = ({ show, onClick }) => {
  return (
    <div 
      className={`overlay ${show ? 'show' : ''}`} 
      onClick={onClick}
    ></div>
  );
};

export default Overlay;
