import React from 'react';
import PropTypes from 'prop-types';
import './styles/Dotnav.css';

const Dotnav = ({ count, activeIndex, onSelect }) => {
  return (
    <div className="dotnav">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={index === activeIndex ? 'active' : ''}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
};

Dotnav.propTypes = {
  count: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dotnav;
