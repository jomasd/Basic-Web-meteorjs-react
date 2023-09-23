import React, { useState } from 'react';
import './styles/Snackbars.css'; // Importing the CSS file

const Snackbar = ({ message }) => {
  const [show, setShow] = useState(true); // State to manage the visibility of the Snackbar

  return (
    show && (
      <div className="snackbar">
        <p>{message}</p>
        <button onClick={() => setShow(false)}>Dismiss</button>
      </div>
    )
  );
};

export default Snackbar;
