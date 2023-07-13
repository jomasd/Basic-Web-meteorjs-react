import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import ContactPage from './components/ContactPage/ContactPage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default AppRouter;
