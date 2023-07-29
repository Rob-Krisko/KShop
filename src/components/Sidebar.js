import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../inventory';
import { SidebarContainer, SidebarLink } from '../styles/SidebarStyles';
import { CartContext } from '../context/CartContext';

function Sidebar({ toggleSidebar }) {
  const { cart } = useContext(CartContext);

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <SidebarContainer>
      <SidebarLink as={Link} to="/" onClick={toggleSidebar}>Home</SidebarLink>
      {categories.map((category, index) => (
        <SidebarLink 
          as={Link} 
          key={index} 
          to={`/category/${category.replace(/\s/g, "-").toLowerCase()}`}
          onClick={toggleSidebar}>
          {category}
        </SidebarLink>
      ))}
      <SidebarLink as={Link} to="/cart" onClick={toggleSidebar}>Cart ({getTotalItems()})</SidebarLink>
    </SidebarContainer>
  );
}

export default Sidebar;
