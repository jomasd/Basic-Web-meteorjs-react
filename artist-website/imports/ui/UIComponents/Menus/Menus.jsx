import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/Menus.css';

const Menus = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <button onClick={toggleMenu} className="menu-button">
        Menu
      </button>
      {isOpen && (
        <ul className="menu-list">
          {options.map((option, index) => (
            <li key={index} className="menu-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Menus.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Menus;
