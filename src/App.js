// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import { MainContent } from './styles/MainContentStyles';
import CartPage from './components/CartPage';
import { CartProvider } from './context/CartContext';  // Import CartProvider

function App() {
  return (
    <Router>
      <Sidebar />
      <MainContent>
        <CartProvider>  {/* Wrap the Routes with CartProvider */}
          <Routes>
            <Route path="/KShop" element={<Navigate to="/" />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </CartProvider>
      </MainContent>
    </Router>
  );
}

export default App;
