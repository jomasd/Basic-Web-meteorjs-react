import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { PortfolioItems } from '../../../api/PortfolioItems/PortfolioItems';

const PortfolioManager = ({ items }) => {
  return (
    <div>
      <h2>Manage Portfolio Items</h2>
      {/* Add a form for creating new items and updating existing ones */}
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          {/* Add buttons for editing and deleting the item */}
        </div>
      ))}
    </div>
  );
};

export default withTracker(() => {
  return {
    items: PortfolioItems.find().fetch(),
  };
})(PortfolioManager);
