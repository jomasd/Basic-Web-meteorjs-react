import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/DatePicker.css';

const DatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    onDateChange(newDate);
  };

  return (
    <input
      type="date"
      value={selectedDate}
      onChange={handleChange}
      className="date-picker"
    />
  );
};

DatePicker.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};

export default DatePicker;
