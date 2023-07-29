import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai'; // Menu Icon
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Cart Icon

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #f8f8f8;
  padding: 20px;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  flex-grow: 1;
`;

const IconWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    width: 100px;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  font-size: 2rem;

  &:hover {
    color: #0056b3;
  }
`;

function Header({ toggleSidebar }) {
  const { cart } = useContext(CartContext);

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <HeaderContainer>
      <Title>KShop</Title>
      <IconWrapper>
        <IconButton onClick={toggleSidebar}><AiOutlineMenu /></IconButton>
        <IconButton as={Link} to="/cart"><AiOutlineShoppingCart /> ({getTotalItems()})</IconButton>
      </IconWrapper>
    </HeaderContainer>
  );
}

export default Header;
