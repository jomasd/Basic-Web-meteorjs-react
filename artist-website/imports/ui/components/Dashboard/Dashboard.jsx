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
        <Routes>
            <Route path="blog-manager" element={<BlogManager />} />
            <Route path="portfolio-manager" element={<PortfolioManager />} />
        </Routes>
    </div>
  );
};

export default Dashboard;
