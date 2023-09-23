import React from 'react';
import Slider from '../Slider/Slider';
import './styles/Sliders.css';

const Sliders = ({ sliders }) => {
  return (
    <div className="sliders-container">
      {sliders.map((slider, index) => (
        <Slider key={index} {...slider} />
      ))}
    </div>
  );
};

export default Sliders;
