import React from 'react';
import PropTypes from 'prop-types';
import './styles/TextInput.css';

const TextInput = ({ label, value, onChange, placeholder, type = "text"  }) => {
  return (
    <div className="text-input">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={label}
      />
      {label && <label htmlFor={label}>{label}</label>}
    </div>
  );
};

TextInput.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default TextInput;
