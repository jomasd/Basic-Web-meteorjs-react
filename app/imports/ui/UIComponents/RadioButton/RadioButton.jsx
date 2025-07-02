import React from 'react';
import './styles/RadioButton.css';

const RadioButton = ({ name, label, value, checked, onChange }) => {
  return (
    <div className="radio-container">
      <input
        type="radio"
        name={name}
        value={value}
        className="radio-input"
        checked={checked}
        onChange={onChange}
      />
      <label className="radio-label">{label}</label>
    </div>
  );
};

export default RadioButton;
