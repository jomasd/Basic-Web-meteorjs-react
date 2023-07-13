import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default AppRouter;
