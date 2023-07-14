import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'; 
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import { PortfolioItems } from '../../../api/PortfolioItems/PortfolioItems';

const PortfolioPage = ({ items }) => {
  return (
    <div>
      <h1>Portfolio</h1>
      {items.map((item, index) => (
        <PortfolioItem key={index} item={item} />
      ))}
    </div>
  );
};

export default withTracker(() => {
  return {
    items: PortfolioItems.find().fetch(),
  };
})(PortfolioPage);

