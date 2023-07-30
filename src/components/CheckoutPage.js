import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const CartItem = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const OrderButton = styled.button`
  transition: background-color 0.5s ease;
  background-color: ${props => props.disabled ? '#888' : '#007BFF'};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const [fromName, setFromName] = useState('');
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setFromName(event.target.value);
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

  const placeOrder = (event) => {
    event.preventDefault();

    if (fromName.trim() === '') {
      alert('Please enter your name.');
      return;
    }

    setIsSending(true);

    // Generate cart content
    const orderDetails = cart.map(item => {
      return {
        name: item.product.name,
        size: item.variant.size,
        quantity: item.quantity,
        total: getTotalPrice(item.variant.price, item.quantity),
      }
    });

    const message = orderDetails.map(item => 
      `Product: ${item.name} - Size: ${item.size} - Quantity: ${item.quantity} - Total: $${item.total}`
    ).join('\n');

    const templateParams = {
      from_name: fromName,
      message: `${message}\n\nGrand Total: $${getCartTotal()}`
    };

    emailjs.send('service_2tkgwa8', 'template_8qucp12', templateParams, 'RvBl8MmqRGKx1RdcR')
      .then(() => {
        clearCart();
        navigate('/confirmation', { state: { orderDetails, grandTotal: getCartTotal() } });
        setIsSending(false);
      }, (error) => {
        console.log(error.text);
        setIsSending(false);
      });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={placeOrder}>
        <label>
          Your Name:
          <input type="text" value={fromName} onChange={handleNameChange} required />
        </label>
        
        <h2>Review Your Order:</h2>
        {cart.map((item, index) => (
          <CartItem key={index}>
            <p><strong>Product:</strong> {item.product.name}</p>
            <p><strong>Size:</strong> {item.variant.size}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Total:</strong> ${getTotalPrice(item.variant.price, item.quantity)}</p>
          </CartItem>
        ))}
        <p><strong>Grand Total:</strong> ${getCartTotal()}</p>
        
        <OrderButton type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Place Order'}</OrderButton>
      </form>
    </div>
  );
}

export default CheckoutPage;
