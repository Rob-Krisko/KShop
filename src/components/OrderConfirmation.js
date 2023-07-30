import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledOrderConfirmation = styled.div`
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
`;

const OrderTitle = styled.h1`
  font-size: 2em;
  color: #333;
`;

const OrderItem = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const GrandTotal = styled.p`
  font-size: 1.2em;
  font-weight: bold;
`;

function OrderConfirmation() {
  const location = useLocation();
  const { orderDetails, grandTotal } = location.state;

  return (
    <StyledOrderConfirmation>
      <OrderTitle>Order Confirmation</OrderTitle>
      <p>Thank you for your order!</p>
      
      <h2>Your Order Details:</h2>
      {orderDetails.map((item, index) => (
        <OrderItem key={index}>
          <p><strong>Product:</strong> {item.name}</p>
          <p><strong>Size:</strong> {item.size}</p>
          <p><strong>Quantity:</strong> {item.quantity}</p>
          <p><strong>Total:</strong> ${item.total}</p>
        </OrderItem>
      ))}
      <GrandTotal><strong>Grand Total:</strong> ${grandTotal}</GrandTotal>
    </StyledOrderConfirmation>
  );
}

export default OrderConfirmation;
