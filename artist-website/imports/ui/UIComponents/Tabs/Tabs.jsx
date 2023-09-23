import React, { useState } from 'react';
import './styles/Tabs.css';

const Tabs = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label || '');

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === tab.label ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-panel ${activeTab === tab.label ? 'active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
