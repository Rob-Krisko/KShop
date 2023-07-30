import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('cart');
    try {
      const parsedData = localData ? JSON.parse(localData) : [];
      return Array.isArray(parsedData) ? parsedData : [];
    } catch (error) {
      console.error("Error parsing cart data from local storage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add an item to the cart
  const addToCart = (product, quantity, size) => {
    const variant = product.variants.find(v => v.size === size);

    const existingCartItemIndex = cart.findIndex(
      item => item.product.id === product.id && item.variant.size === variant.size
    );

    if (existingCartItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      const newCart = [...cart];
      newCart[existingCartItemIndex].quantity += quantity;
      setCart(newCart);
    } else {
      // If the item does not exist in the cart, add it
      setCart([...cart, { product, variant, quantity }]);
    }
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (productId, size, deltaQuantity) => {
    const existingCartItemIndex = cart.findIndex(
      item => item.product.id === productId && item.variant.size === size
    );
  
    if (existingCartItemIndex !== -1) {
      const newCart = [...cart];
      newCart[existingCartItemIndex].quantity += deltaQuantity;
  
      // If quantity is 0 or less, remove the item from the cart
      if (newCart[existingCartItemIndex].quantity <= 0) {
        removeFromCart(productId, size);
      } else {
        setCart(newCart);
      }
    }
  };
  
  // Function to remove an item from the cart
  const removeFromCart = (productId, size) => {
    const newCart = cart.filter(
      item => item.product.id !== productId || item.variant.size !== size
    );
    setCart(newCart);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
