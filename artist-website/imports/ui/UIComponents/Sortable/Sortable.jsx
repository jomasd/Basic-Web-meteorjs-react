import React, { useState } from 'react';
import './styles/Sortable.css';

const SortableItem = ({ value, onDragStart, onDragOver, onDrop }) => (
  <div
    draggable
    onDragStart={onDragStart}
    onDragOver={onDragOver}
    onDrop={onDrop}
    className="sortable-item"
  >
    {value}
  </div>
);

const Sortable = ({ items }) => {
  const [list, setList] = useState(items);

  const handleDragStart = (index) => (event) => {
    event.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (index) => (event) => {
    const fromIndex = Number(event.dataTransfer.getData('text/plain'));
    const toIndex = index;

    const newList = [...list];
    const [movedItem] = newList.splice(fromIndex, 1);
    newList.splice(toIndex, 0, movedItem);

    setList(newList);
  };

  return (
    <div className="sortable-list">
      {list.map((item, index) => (
        <SortableItem
          key={index}
          value={item}
          onDragStart={handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={handleDrop(index)}
        />
      ))}
    </div>
  );
};

export default Sortable;
