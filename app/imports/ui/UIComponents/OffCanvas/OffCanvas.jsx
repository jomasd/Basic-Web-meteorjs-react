import React, { useState } from 'react';
import './styles/OffCanvas.css';

const OffCanvas = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="offcanvas-container">
      <button onClick={toggleOffCanvas} className="offcanvas-button">
        Toggle Sidebar
      </button>
      <div className={`offcanvas-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default OffCanvas;
