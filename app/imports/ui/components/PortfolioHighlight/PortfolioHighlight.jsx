import React from 'react';

const PortfolioHighlight = ({ piece }) => {
  return (
    <li>
      <h3>{piece.title}</h3>
      <img src={piece.image} alt={piece.title} />
      <p>{piece.description}</p>
    </li>
  );
};

export default PortfolioHighlight;
