import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';
import { FiPlusCircle, FiMinusCircle, FiXCircle } from 'react-icons/fi';

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
  @media (max-width: 768px) {
    padding: 5px;
    font-size: 0.8em;
  }
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

const QuantityControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    margin: 0 10px;
    cursor: pointer;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const increaseQuantity = (product, variant, quantity) => {
    updateQuantity(product.id, variant.size, quantity + 1);
  };

  const decreaseQuantity = (product, variant, quantity) => {
    if (quantity > 1) {
      updateQuantity(product.id, variant.size, quantity - 1);
    }
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

  if (cart.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <TableContainer>
        <CartTable>
          <thead>
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Cost</th>
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
                  <QuantityControl>
                    <FiMinusCircle size={24} onClick={() => decreaseQuantity(item.product, item.variant, item.quantity)} />
                    {item.quantity}
                    <FiPlusCircle size={24} onClick={() => increaseQuantity(item.product, item.variant, item.quantity)} />
                  </QuantityControl>
                </CartCell>
                <CartCell>${item.variant.price ? item.variant.price.toFixed(2) : "N/A"}</CartCell>
                <CartCell>${getTotalPrice(item.variant.price, item.quantity)}</CartCell>
                <CartCell>
                  <FiXCircle size={24} onClick={() => removeFromCart(item.product.id, item.variant.size)} />
                </CartCell>
              </CartRow>
            ))}
            <TotalRow>
              <CartCell colSpan="4">Total</CartCell>
              <CartCell>${getCartTotal()}</CartCell>
            </TotalRow>
          </tbody>
        </CartTable>
      </TableContainer>
    </div>
  );
}

export default CartPage;
