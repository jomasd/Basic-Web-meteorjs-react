import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/Drop.css';

const Drop = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropRef = useRef(null);
  let aimTimer;

  const handleMouseEnter = () => {
    clearTimeout(aimTimer);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    aimTimer = setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms delay
  };

  useEffect(() => {
    return () => {
      clearTimeout(aimTimer);
    };
  }, []);

  return (
    <div
      className="drop-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropRef}
    >
      {trigger}
      {isOpen && <div className="drop-content">{content}</div>}
    </div>
  );
};

Drop.propTypes = {
  trigger: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default Drop;
