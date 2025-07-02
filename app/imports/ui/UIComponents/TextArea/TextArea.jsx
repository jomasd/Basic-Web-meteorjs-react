import React from 'react';
import './styles/TextArea.css';

const TextArea = ({ label, value, onChange, placeholder, rows = 4 }) => {
  return (
    <div className="textarea-container">
      {label && <label>{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="text-area"
      />
    </div>
  );
};

export default TextArea;
