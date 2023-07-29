import styled from 'styled-components';

export const MainContent = styled.main`
  padding: 20px;
  flex: 1;
  margin-left: 230px; // Adjust as needed, should be greater than the width of the Sidebar
`;

export const Sidebar = styled.aside`
  position: fixed;
  width: 230px;
  height: calc(100vh - 60px);
  overflow: auto;
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
