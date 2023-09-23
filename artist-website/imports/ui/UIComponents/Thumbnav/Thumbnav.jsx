import React from 'react';
import './styles/Thumbnav.css';

const Thumbnav = ({ items = [] }) => {
  return (
    <div className="thumbnav-container">
      {items.map((item, index) => (
        <a key={index} href={item.link} className="thumbnav-item">
          <img src={item.thumbnail} alt={item.label} />
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default Thumbnav;
