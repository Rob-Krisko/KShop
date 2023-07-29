import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../inventory';
import { SidebarContainer, SidebarLink } from '../styles/SidebarStyles';  // importing styled components
import { CartContext } from '../context/CartContext';  // import the CartContext

function Sidebar() {
  const { cart } = useContext(CartContext);  // access the cart from context

  // Function to calculate the total number of items in the cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

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
      <SidebarLink as={Link} to="/cart">Cart ({getTotalItems()})</SidebarLink>  {/* Display the total number of items next to "Cart" */}
    </SidebarContainer>
  );
}

export default Sidebar;
