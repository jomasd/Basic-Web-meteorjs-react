import React, { useState } from 'react';
import './styles/Form.css';

const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text"
        className="form-input"
      />
      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
};

export default Form;
