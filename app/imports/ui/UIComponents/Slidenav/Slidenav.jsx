import React, { useState } from 'react';
import './styles/Slidenav.css';


const SlideNav = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="slidenav-container">
      {items.map((item, index) => (
        <div
          key={index}
          className={`slidenav-item ${active === index ? 'active' : ''}`}
          onClick={() => setActive(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SlideNav;
