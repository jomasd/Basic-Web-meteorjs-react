import React from 'react';
import './styles/ExtendedFAB.css';

const ExtendedFAB = ({ label, icon, onClick }) => {
  return (
    <button className="extended-fab" onClick={onClick}>
      <span className="extended-fab__icon">{icon}</span>
      <span className="extended-fab__label">{label}</span>
    </button>
  );
};

export default ExtendedFAB;
