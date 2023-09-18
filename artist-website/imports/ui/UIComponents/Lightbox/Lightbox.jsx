import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/Lightbox.css';

const Lightbox = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLightbox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img src={src} alt={alt} className="thumbnail" onClick={toggleLightbox} />
      {isOpen && (
        <div className="lightbox-overlay" onClick={toggleLightbox}>
          <img src={src} alt={alt} className="lightbox-image" />
        </div>
      )}
    </>
  );
};

Lightbox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Lightbox;
