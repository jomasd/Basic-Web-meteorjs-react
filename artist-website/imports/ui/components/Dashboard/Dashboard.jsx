import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogManager from './BlogManager';
import PortfolioManager from './PortfolioManager';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      
      <nav>
      <ul>
        <li><Link to="/dashboard/blog">BLOG</Link></li>
        <li><Link to="/dashboard/portfolio">Portfolio</Link></li>
      </ul>

    </nav>
    <Routes>
        <Route path="blog" element={<BlogManager />} />
        <Route path="portfolio" element={<PortfolioManager />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
