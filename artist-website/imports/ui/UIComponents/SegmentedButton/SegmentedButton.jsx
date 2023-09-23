import React, { useState } from 'react';
import './styles/SegmentedButton.css';

const SegmentedButton = ({ options }) => {
  const [selected, setSelected] = useState(options[0].value);

  return (
    <div className="segmented-button-container">
      {options.map(option => (
        <button
          key={option.value}
          className={`segmented-button ${selected === option.value ? 'active' : ''}`}
          onClick={() => setSelected(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedButton;
