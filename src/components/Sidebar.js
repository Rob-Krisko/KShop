// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../inventory';
import { SidebarContainer, SidebarLink } from '../styles/SidebarStyles';  // importing styled components

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarLink as={Link} to="/">Home</SidebarLink>
      {categories.map((category, index) => (
        <SidebarLink 
          as={Link} 
          key={index} 
          to={`/category/${category.replace(/\s/g, "-").toLowerCase()}`}>
          {category}
        </SidebarLink>
      ))}
      <SidebarLink as={Link} to="/cart">Cart</SidebarLink>
    </SidebarContainer>
  );
}

export default Sidebar;
