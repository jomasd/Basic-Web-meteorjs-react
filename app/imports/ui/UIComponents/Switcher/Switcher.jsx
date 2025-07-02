import React, { useState } from 'react';
import './styles/Switcher.css';

const Switcher = ({ initialState = false, onChange }) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (onChange) {
      onChange(!isOn);
    }
  };

  return (
    <div className={`switcher ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
      <div className="switcher-toggle"></div>
    </div>
  );
};

export default Switcher;
