import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';

const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const CartRow = styled.tr`
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

const CartCell = styled.td`
  padding: 10px;
  text-align: center;
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (product, variant, event) => {
    updateQuantity(product.id, variant.size, Number(event.target.value));
  };

  const getTotalPrice = (price, quantity) => {
    if (price) {
      return (price * quantity).toFixed(2);
    } else {
      return "N/A";
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = item?.variant?.price;
      return price ? total + (price * item.quantity) : total;
    }, 0).toFixed(2);
  };

  // If cart is empty, return a message
  if (cart.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <CartTable>
        <thead>
          <tr>
            <th>Product</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <CartRow key={index}>
              <CartCell>{item.product.name}</CartCell>
              <CartCell>{item.variant.size}</CartCell>
              <CartCell>
                <input type="number" min="1" value={item.quantity} onChange={(event) => handleQuantityChange(item.product, item.variant, event)} />
              </CartCell>
              <CartCell>${item.variant.price ? item.variant.price.toFixed(2) : "N/A"}</CartCell>
              <CartCell>${getTotalPrice(item.variant.price, item.quantity)}</CartCell>
              <CartCell>
                <button onClick={() => removeFromCart(item.product.id, item.variant.size)}>Remove</button>
              </CartCell>
            </CartRow>
          ))}
          <TotalRow>
            <CartCell colSpan="4">Total</CartCell>
            <CartCell>${getCartTotal()}</CartCell>
          </TotalRow>
        </tbody>
      </CartTable>
    </div>
  );
}

export default CartPage;
