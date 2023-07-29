import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import { MainContent, Sidebar as StyledSidebar, Container, StyledHeader } from './styles/MainContentStyles'; // import additional styles
import CartPage from './components/CartPage';
import { CartProvider } from './context/CartContext';  // Import CartProvider
import Header from './components/Header';  // Import Header

function App() {
  return (
    <CartProvider>  {/* Wrap everything with CartProvider */}
      <Router>
        <Container>
          <Header title="Welcome to KShop" />  {/* Global Header */}
          <div style={{ display: 'flex' }}>
            <StyledSidebar>
              <Sidebar />
            </StyledSidebar>
            <MainContent>
              <Routes>
                <Route path="/KShop" element={<Navigate to="/" />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </MainContent>
          </div>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
