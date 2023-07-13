import React from 'react';

const PortfolioItem = ({ piece }) => {
  return (
    <li>
      <h3>{piece.title}</h3>
      <img src={piece.image} alt={piece.title} />
      <p>{piece.description}</p>
    </li>
  );
};

export default PortfolioItem;
