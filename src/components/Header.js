// Header.js

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #e7e7e7;
`;

const Title = styled.h1`
  margin: 0;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>KShop</Title>
    </HeaderContainer>
  );
}

export default Header;
