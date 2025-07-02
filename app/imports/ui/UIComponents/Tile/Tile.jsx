import React from 'react';
import './styles/Tile.css';

const Tile = ({ image, title, description, onClick }) => {
  return (
    <div className="tile-container" onClick={onClick}>
      <img src={image} alt={title} className="tile-image" />
      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
        <p className="tile-description">{description}</p>
      </div>
    </div>
  );
};

export default Tile;
