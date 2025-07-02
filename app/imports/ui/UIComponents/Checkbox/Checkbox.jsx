import React from 'react';
import './styles/Checkbox.css';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
      />
      <label className="checkbox-label">{label}</label>
    </div>
  );
};

export default Checkbox;
