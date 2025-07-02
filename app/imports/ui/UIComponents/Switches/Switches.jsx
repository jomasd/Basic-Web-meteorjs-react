import React, { useState } from 'react';
import './styles/Switches.css';

const Switches = ({ options = [], onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwitchClick = (index) => {
    setActiveIndex(index);
    if (onChange) {
      onChange(options[index]);
    }
  };

  return (
    <div className="switches">
      {options.map((option, index) => (
        <div
          key={index}
          className={`switch ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleSwitchClick(index)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Switches;
