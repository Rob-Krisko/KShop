// src/styles/SidebarStyles.js

import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  width: 200px;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SidebarLink = styled.div`
  text-decoration: none;
  color: black;

  &:hover {
    color: blue;
  }
`;
