import React from 'react';
import { Routes, Route , Link} from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import BlogManager from './BlogManager';
import PortfolioManager from './PortfolioManager';

const Dashboard = () => {
  return (
    <div>
        <DashboardNavbar />
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
