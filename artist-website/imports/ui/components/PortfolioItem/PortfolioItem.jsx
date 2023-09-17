import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = ({ artwork }) => {
  if (!artwork) return null;

  return (
    <div className="portfolio-item">
      <img src={artwork.imageUrl} alt={artwork.title} />
      <div className="portfolio-item-info">
        <h3>{artwork.title}</h3>
        <p>{artwork.description}</p>
        <p>Medium: {artwork.medium}</p>
        <p>Dimensions: {artwork.dimensions}</p>
        <p>Year: {artwork.yearCreated}</p>
        {artwork.price && <p>Price: ${artwork.price}</p>}
        <p>Status: {artwork.status}</p>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  artwork: PropTypes.shape({
    artworkId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    medium: PropTypes.string.isRequired,
    dimensions: PropTypes.string.isRequired,
    yearCreated: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool,
    price: PropTypes.number,
    status: PropTypes.string.isRequired,
  }),
};

export default PortfolioItem;
