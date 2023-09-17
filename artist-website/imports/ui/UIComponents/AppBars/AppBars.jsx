import React from 'react';
import PropTypes from 'prop-types';
import './styles/AppBars.css';

const AppBars = ({ title, actions }) => {
  return (
    <div className="app-bar">
      <div className="app-bar-title">{title}</div>
      <div className="app-bar-actions">
        {actions.map((action, index) => (
          <button key={index} onClick={action.onClick}>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

AppBars.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
};

AppBars.defaultProps = {
  actions: [],
};

export default AppBars;
