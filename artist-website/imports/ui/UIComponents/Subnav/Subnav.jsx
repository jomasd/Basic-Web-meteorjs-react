import React, { useState } from 'react';
import './styles/Subnav.css';

const Subnav = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="subnav-container">
      <button className="subnav-toggle" onClick={() => setIsOpen(!isOpen)}>
        Toggle Subnav
      </button>
      {isOpen && (
        <div className="subnav">
          {items.map((item, index) => (
            <a key={index} href={item.link}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Subnav;
