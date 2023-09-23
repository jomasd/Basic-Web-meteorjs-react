import React, { useEffect } from 'react';
import './styles/Notification.css';

const Notification = ({ message, icon, onClose, timeout }) => {
  useEffect(() => {
    if (timeout) {
      const timer = setTimeout(() => {
        onClose();
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [timeout, onClose]);

  return (
    <div className="notification">
      {icon && <span className="notification-icon">{icon}</span>}
      <span>{message}</span>
      <span className="notification-close" onClick={onClose}>
        ✖️
      </span>
    </div>
  );
};

export default Notification;
