import React from 'react';
import './styles/Nav.css';

const Nav = ({ items }) => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            <a href={item.href} className="nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
