import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = Meteor.user();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Log In</Link> {/* Add this line */}
      <Link to="/register">Register</Link> {/* Add this line */}
      {user && <Link to="/dashboard">Dashboard</Link>} {/* Only display this link if a user is logged in */}
    </nav>
  );
};

export default Navbar;
