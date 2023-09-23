import React, { useRef } from 'react';
import './styles/Slider.css';

const Slider = ({ min, max, value, onChange }) => {
  const sliderRef = useRef(null);

  const handleClick = (event) => {
    console.log('Slider clicked');
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const percentage = (event.clientX - rect.left) / rect.width;
    const clickedValue = Math.round(min + percentage * (max - min));
    onChange({ target: { value: clickedValue } });
    
  };
  const handleMouseMove = (event) => {
    if (event.buttons !== 1) return; // Check if the left mouse button is pressed
    // Update the slider value based on the mouse position
  };
  return (
    <input
      type="range"
      className="slider"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      ref={sliderRef}
    />
  );
};

export default Slider;
