import styled from 'styled-components';

export const MainContent = styled.main`
  padding: 20px;
  padding-top: 80px; // adjust this value based on the height of your header
  flex: 1;
  margin-left: 230px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Sidebar = styled.aside`
  position: fixed;
  padding-top: 80px; // adjust this value based on the height of your header
  width: 230px;
  height: calc(100vh - 80px); // adjust this value based on the height of your header
  overflow: hidden;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 769px) {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
