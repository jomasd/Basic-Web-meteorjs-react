import React from 'react';
import './styles/Modal.css';
import Overlay from '../Overlay/Overlay';

const Modal = ({ show, onClose, children }) => {
  return (
    <>
      <Overlay show={show} onClick={onClose} />
      <div className={`modal ${show ? 'show' : ''}`}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
