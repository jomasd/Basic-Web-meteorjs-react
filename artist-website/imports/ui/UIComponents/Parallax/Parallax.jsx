import React from 'react';
import './styles/Parallax.css';

const Parallax = ({ image }) => {
  return (
    <div className="parallax" style={{ backgroundImage: `url(${image})` }}>
    </div>
  );
};

export default Parallax;
