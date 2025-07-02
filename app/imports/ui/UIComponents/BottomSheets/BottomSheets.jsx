import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './styles/BottomSheets.css';

const BottomSheet = ({ isOpen, onClose, children }) => {
  return (
    <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}>
      <div className="bottom-sheet-header">
        <Button onClick={onClose} label="Close" />
      </div>
      <div className="bottom-sheet-content">
        {children}
      </div>
    </div>
  );
};

BottomSheet.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default BottomSheet;
