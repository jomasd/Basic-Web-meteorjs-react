import React, { useState } from 'react';
import './styles/Dropbar.css';

const Dropbar = ({ triggerElement, dropbarContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropbar-container">
      <div
        className="dropbar-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {triggerElement}
      </div>
      {isOpen && (
        <div className="dropbar-content">
          {dropbarContent}
        </div>
      )}
    </div>
  );
};

export default Dropbar;
