import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { PortfolioItems } from '../../../api/PortfolioItems/PortfolioItems';
import AddPortfolioItemForm from './AddPortfolioItemForm';

const PortfolioManager = ({ items }) => {
  const handleAdd = (title, description) => {
    // Call a Meteor method to insert a new item
  };

  return (
    <div>
      <h2>Manage Portfolio Items</h2>
      <AddPortfolioItemForm onAdd={handleAdd} />
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
