import React, { useState } from 'react';

const PortfolioPage = () => {
  const [portfolioData, setPortfolioData] = useState({
    categories: [
      {
        categoryId: '1',
        name: 'Paintings',
        artworks: [
          {
            artworkId: '1',
            title: 'Sunset',
            imageUrl: 'https://placehold.co/200',
          },
          {
            artworkId: '2',
            title: 'Mountain',
            imageUrl: 'https://placehold.co/200',
          },
        ],
      },
      {
        categoryId: '2',
        name: 'Sculptures',
        artworks: [
          {
            artworkId: '3',
            title: 'Statue',
            imageUrl: 'https://placehold.co/200',
          },
        ],
      },
    ],
  });

  const addArtwork = (categoryId, newArtwork) => {
    const updatedCategories = portfolioData.categories.map((category) => {
      if (category.categoryId === categoryId) {
        return {
          ...category,
          artworks: [...category.artworks, newArtwork],
        };
      }
      return category;
    });
    setPortfolioData({ categories: updatedCategories });
  };

  const deleteArtwork = (categoryId, artworkId) => {
    const updatedCategories = portfolioData.categories.map((category) => {
      if (category.categoryId === categoryId) {
        return {
          ...category,
          artworks: category.artworks.filter((artwork) => artwork.artworkId !== artworkId),
        };
      }
      return category;
    });
    setPortfolioData({ categories: updatedCategories });
  };

  return (
    <div>
      <h1>Portfolio</h1>
      {portfolioData.categories.map((category) => (
        <div key={category.categoryId}>
          <h2>{category.name}</h2>
          {category.artworks.map((artwork) => (
            <div key={artwork.artworkId}>
              <img src={artwork.imageUrl} alt={artwork.title} />
              <h3>{artwork.title}</h3>
              <button onClick={() => deleteArtwork(category.categoryId, artwork.artworkId)}>Delete</button>
            </div>
          ))}
          <button onClick={() => addArtwork(category.categoryId, { artworkId: '4', title: 'New Art', imageUrl: 'https://placehold.co/200' })}>
            Add Artwork
          </button>
        </div>
      ))}
    </div>
  );
};

export default PortfolioPage;
