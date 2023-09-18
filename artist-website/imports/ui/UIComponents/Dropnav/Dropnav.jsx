import React, { useState } from 'react';
import './styles/Dropnav.css';

const Dropnav = ({ menuItems }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <nav className="dropnav-container">
      <ul className="dropnav-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="dropnav-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item.label}
            {activeItem === index && (
              <div className="dropnav-dropdown">
                {item.dropdownContent}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Dropnav;
