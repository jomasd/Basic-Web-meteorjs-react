import React from 'react';
import PropTypes from 'prop-types';
import './styles/List.css';

const List = ({ items, ordered }) => {
  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <ListTag className="custom-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListTag>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  ordered: PropTypes.bool,
};

List.defaultProps = {
  ordered: false,
};

export default List;
