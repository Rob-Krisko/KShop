import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';
import { FiPlusCircle, FiMinusCircle, FiXCircle } from 'react-icons/fi';

const CartCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CartInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  & svg {
    margin: 0 10px;
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const RemoveIcon = styled(FiXCircle)`
  cursor: pointer;
  width: 2em;
  height: 2em;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const increaseQuantity = (id, size) => {
    updateQuantity(id, size, 1);
  };

  const decreaseQuantity = (id, size) => {
    updateQuantity(id, size, -1);
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
      <TableContainer>
        {cart.map((item, index) => (
          <CartCard key={index}>
            <CartInfo>
              <div>
                <strong>Product:</strong> {item.product.name}<br/>
                <strong>Size:</strong> {item.variant.size}
              </div>
              <div>
                <strong>Price:</strong> ${item.variant.price ? item.variant.price.toFixed(2) : "N/A"}
              </div>
            </CartInfo>
            <CartInfo>
              <QuantityControl>
                <FiMinusCircle onClick={() => decreaseQuantity(item.product.id, item.variant.size)} />
                {item.quantity}
                <FiPlusCircle onClick={() => increaseQuantity(item.product.id, item.variant.size)} />
              </QuantityControl>
              <div>
                <strong>Total:</strong> ${getTotalPrice(item.variant.price, item.quantity)}
              </div>
              <div>
                <RemoveIcon onClick={() => removeFromCart(item.product.id, item.variant.size)} />
              </div>
            </CartInfo>
          </CartCard>
        ))}
        <div>
          <strong>Total:</strong> ${getCartTotal()}
        </div>
      </TableContainer>
    </div>
  );
}

export default CartPage;
