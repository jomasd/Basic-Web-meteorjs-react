import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/BottomAppBar.css';

const BottomAppBar = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bottom-app-bar">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bottom-app-bar-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => setActiveIndex(index)}
        >
          <img src={item.icon} alt={item.label} />
          {item.label && <span>{item.label}</span>}
        </div>
      ))}
    </div>
  );
};

BottomAppBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ).isRequired,
};

export default BottomAppBar;
