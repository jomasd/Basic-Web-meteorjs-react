import React, { useState } from 'react';
import './styles/Slideshow.css';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log('Next slide'+ currentIndex);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      <button onClick={goToPrevSlide}>&lt;</button>
      <img src={images[currentIndex]} alt="Slide" />
      <button onClick={goToNextSlide}>&gt;</button>
    </div>
  );
};

export default Slideshow;
