// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';  // import CategoryPage
import { MainContent } from './styles/MainContentStyles';

function App() {
  return (
    <Router>
      <Sidebar />
      <MainContent>
      <Routes>
        <Route path="/KShop" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/cart" element={<div>Cart Page</div>} />
      </Routes>
      </MainContent>
    </Router>
  );
}

export default App;
