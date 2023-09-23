import React, { useState } from 'react';
import './styles/TimePicker.css';

const TimePicker = ({ onTimeChange }) => {
  const [time, setTime] = useState('');

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    if (onTimeChange) {
      onTimeChange(e.target.value);
    }
  };

  return (
    <div className="timepicker-container">
      <label htmlFor="time-input">Select Time:</label>
      <input
        type="time"
        id="time-input"
        value={time}
        onChange={handleTimeChange}
        className="timepicker-input"
      />
    </div>
  );
};

export default TimePicker;
