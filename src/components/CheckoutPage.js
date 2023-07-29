import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import emailjs from 'emailjs-com';

function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const [fromName, setFromName] = useState('');

  const handleNameChange = (event) => {
    setFromName(event.target.value);
  };

  const placeOrder = (event) => {
    event.preventDefault();

    // Generate cart content
    const message = cart.map(item => 
      `Product: ${item.product.name} - Size: ${item.variant.size} - Quantity: ${item.quantity}`
    ).join('\n');

    const templateParams = {
      from_name: fromName,
      message: message
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
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
