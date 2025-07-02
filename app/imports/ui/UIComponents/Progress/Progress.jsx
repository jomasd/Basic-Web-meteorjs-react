import React from 'react';
import './styles/Progress.css'

const Progress = ({ value, max }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${(value / max) * 100}%` }}></div>
    </div>
  );
};

export default Progress;