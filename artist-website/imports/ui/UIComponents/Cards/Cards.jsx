import React from 'react';
import PropTypes from 'prop-types';
import './styles/Cards.css';

const Card = ({ title, content, imageSrc }) => {
  return (
    <div className="card">
      {imageSrc && <img className="card-image" src={imageSrc} alt={title} />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};

export default Card;
