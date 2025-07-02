import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/Dropdown.css';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>Select</button>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => onSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
