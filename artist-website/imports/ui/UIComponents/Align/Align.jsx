import React from 'react';
import './styles/Align.css';

const Align = ({ direction, children }) => {
    return (
        <div className={`align-container align-${direction}`}>
            {children}
        </div>
    );
}

export default Align;
