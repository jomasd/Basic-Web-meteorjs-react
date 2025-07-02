import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = ({ items }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  return (
    <div className="navbar">
      <div>
        <span>🍔</span> {/* Menu Icon */}
        <span>Brand Name</span>
      </div>
      <div>
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <Link to={item.href}>
              {item.icon} {item.label}
            </Link>
            {item.dropdown && (
              <>
                <span onClick={() => toggleDropdown(item.id)} style={{ cursor: 'pointer' }}>⬇️</span> {/* Dropdown Icon */}
                {openDropdown === item.id && (
                  <div className="dropdown">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <Link key={dropIndex} to={dropItem.href}>
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
