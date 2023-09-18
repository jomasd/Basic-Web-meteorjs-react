import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import Navbar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import ContactPage from './components/ContactPage/ContactPage';
import BlogPage from './components/BlogPage/BlogPage';
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import BlogManager from './components/Dashboard/BlogManager';
import PortfolioManager from './components/Dashboard/PortfolioManager';
import DashboardNavbar from './components/Dashboard/DashboardNavbar';
import PortfolioItem from './components/PortfolioItem/PortfolioItem';
import ComponentLibraryPage from './components/Components-Library/ComponentLibraryPage';

const PrivateRoute = (Component) => {
  const user = useTracker(() => Meteor.user());
  return user ? Component : <Navigate to="/login" />;
};

const DashboardRoutes = () => (
  <>
    <DashboardNavbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/portfolio-manager" element={<PortfolioManager/>} />
      <Route path="/blog-manager" element={<BlogManager />} />
      {/* Add more dashboard-specific routes here */}
    </Routes>
  </>
);


const AppRouter = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/:year/:artworkId" element={<PortfolioItem />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard/*" element={PrivateRoute(<DashboardRoutes />)} />
      <Route path='/library' element={<ComponentLibraryPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
