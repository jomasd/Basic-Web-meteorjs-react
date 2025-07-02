import React from 'react';
import './styles/Section.css';

const Section = ({ children }) => {
  return (
    <div className="section-container">
      {children}
    </div>
  );
};

export default Section;
