import React from 'react';
import PropTypes from 'prop-types';
import './styles/Cover.css';

const Cover = ({ children, mediaType, mediaSrc }) => {
  return (
    <div className="cover-container">
      {mediaType === 'image' && <img src={mediaSrc} alt="Cover" className="cover-media" />}
      {mediaType === 'video' && <video src={mediaSrc} autoPlay loop className="cover-media"></video>}
      {mediaType === 'iframe' && <iframe src={mediaSrc} className="cover-media"></iframe>}
      <div className="cover-content">
        {children}
      </div>
    </div>
  );
};

Cover.propTypes = {
  children: PropTypes.node.isRequired,
  mediaType: PropTypes.oneOf(['image', 'video', 'iframe']).isRequired,
  mediaSrc: PropTypes.string.isRequired,
};

export default Cover;
