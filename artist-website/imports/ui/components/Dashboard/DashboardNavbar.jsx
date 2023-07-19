import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  return (
    <nav>
      <Link to="/dashboard/blog-manager">Blog Manager</Link>
      <Link to="/dashboard/portfolio-manager">Portfolio Manager</Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default DashboardNavbar;
