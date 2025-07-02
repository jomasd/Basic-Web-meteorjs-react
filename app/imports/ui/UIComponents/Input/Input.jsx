import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, value, onChange }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
