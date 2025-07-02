import React from 'react';
import PropTypes from 'prop-types';
import './styles/Chips.css';

const Chips = ({ items, onDelete }) => {
  return (
    <div className="chips-container">
      {items.map((item, index) => (
        <div key={index} className="chip">
          <span className="chip-label">{item.label}</span>
          <button className="chip-delete-button" onClick={() => onDelete(item.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
};

Chips.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Chips;
