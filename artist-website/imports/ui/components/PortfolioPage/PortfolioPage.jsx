import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const PortfolioPage = () => {
  const portfolioPieces = [
    { title: 'Portfolio piece 1', image: '/path/to/image.jpg', description: 'This is the first portfolio piece.' },
    { title: 'Portfolio piece 2', image: '/path/to/image.jpg', description: 'This is the second portfolio piece.' },
    // Add more portfolio pieces as needed
  ];

  return (
    <div>
      <h1>My Portfolio</h1>
      <ul>
        {portfolioPieces.map((piece, index) => (
          <PortfolioItem key={index} piece={piece} />
        ))}
      </ul>
    </div>
  );
};

export default PortfolioPage;
