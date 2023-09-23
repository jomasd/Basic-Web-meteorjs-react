import React from 'react';
import './styles/Progress.scss';

export const Progress = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};
