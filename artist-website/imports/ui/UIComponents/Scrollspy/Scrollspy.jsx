// ScrollSpy.jsx
import React, { useState, useEffect } from 'react';
import './styles/ScrollSpy.css';

const ScrollSpy = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element.getBoundingClientRect().top <= 0) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="scrollspy-container">
      {sections.map(section => (
        <div key={section.id} className={`scrollspy-item ${section.id === activeSection ? 'active' : ''}`}>
          {section.label}
        </div>
      ))}
    </div>
  );
};

export default ScrollSpy;
