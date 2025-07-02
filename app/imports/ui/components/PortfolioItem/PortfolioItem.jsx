// PortfolioItemPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioItemPage = () => {
  const { itemId } = useParams();

  // Fetch the portfolio item data based on itemId
  // For now, let's mock the data
  const portfolioItem = {
    itemId: 'nvxh82d4potdmtqvwko9s9h1e47g36',
    title: 'Sample Artwork',
    imageUrl: 'https://placehold.co/200',
    description: 'This is a sample description.',
  };

  return (
    <div>
      <h1>{portfolioItem.title}</h1>
      <img src={portfolioItem.imageUrl} alt={portfolioItem.title} />
      <p>{portfolioItem.description}</p>
    </div>
  );
};

export default PortfolioItemPage;
