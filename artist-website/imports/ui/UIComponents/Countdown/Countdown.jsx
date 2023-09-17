import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/Countdown.css';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="countdown">
      <span className="countdown-item">{timeLeft.days} Days</span>
      <span className="countdown-item">{timeLeft.hours} Hours</span>
      <span className="countdown-item">{timeLeft.minutes} Minutes</span>
      <span className="countdown-item">{timeLeft.seconds} Seconds</span>
    </div>
  );
};

Countdown.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
};

export default Countdown;
