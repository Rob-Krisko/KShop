import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import { MainContent, Sidebar as StyledSidebar, Container } from './styles/MainContentStyles'; 
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import { CartProvider } from './context/CartContext';  
import Header from './components/Header';  

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <CartProvider>
      <Router>
        <Container>
          <Header title="Welcome to KShop" toggleSidebar={toggleSidebar} />
          <div style={{ display: 'flex' }}>
            <StyledSidebar isOpen={isSidebarOpen}>
              <Sidebar toggleSidebar={toggleSidebar} />
            </StyledSidebar>
            <MainContent>
              <Routes>
                <Route path="/KShop" element={<Navigate to="/" />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </MainContent>
          </div>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
