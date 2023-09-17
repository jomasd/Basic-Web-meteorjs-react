import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Portfolio, Artworks } from '../../../api/portfolio/collections';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const PortfolioPage = ({ portfolio, artworks }) => {
  const renderCategories = () => {
    if (!portfolio || !portfolio.categories) return <p>Loading...</p>;

    return portfolio.categories.map((category) => (
      <div key={category.categoryId}>
        <h2>{category.name}</h2>
        <div>
          {category.artworks.map((artworkId) => {
            const artwork = artworks.find((art) => art.artworkId === artworkId);
            return <PortfolioItem key={artworkId} artwork={artwork} />;
          })}
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h1>Portfolio</h1>
      {renderCategories()}
    </div>
  );
};

export default withTracker(() => {
  return {
    portfolio: Portfolio.findOne(),
    artworks: Artworks.find().fetch(),
  };
})(PortfolioPage);
