import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import AddPortfolioItemForm from './AddPortfolioItemForm';

const PortfolioManager = ({ items }) => {
  const handleAdd = (title, description) => {
    // Call a Meteor method to insert a new item
  };

  return (
    <div>
      <h1>Portfolio Manager</h1>
    </div>
  );
};

export default withTracker(() => {
  return {
   
  };
})(PortfolioManager);
