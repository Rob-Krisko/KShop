import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const CartItem = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const [fromName, setFromName] = useState('');

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

    // Generate cart content
    const message = cart.map(item => 
      `Product: ${item.product.name} - Size: ${item.variant.size} - Quantity: ${item.quantity} - Total: $${getTotalPrice(item.variant.price, item.quantity)}`
    ).join('\n');

    const templateParams = {
      from_name: fromName,
      message: `${message}\n\nGrand Total: $${getCartTotal()}`
    };

    emailjs.send('service_2tkgwa8', 'template_8qucp12', templateParams, 'RvBl8MmqRGKx1RdcR')
      .then(() => {
        alert('Order has been sent!');
      }, (error) => {
        console.log(error.text);
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
        
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
