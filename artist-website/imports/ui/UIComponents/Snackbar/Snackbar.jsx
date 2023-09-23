// Snackbar.jsx

import React, { useState, useEffect } from 'react';
import './styles/Snackbar.css';

const Snackbar = ({ message, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    isVisible && (
      <div className="snackbar">
        {message}
      </div>
    )
  );
};

export default Snackbar;
