// ProductCard.js

import React from 'react';
import styled from 'styled-components';

const StyledProductCard = styled.div`
  width: 250px;
  height: 300px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

function ProductCard({ product }) {
  return (
    <StyledProductCard>
      <ProductImage src={`${process.env.PUBLIC_URL}/${product.imageUrl}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: {product.variants[0].price} (for smallest size)</p> 
    </StyledProductCard>
  );
}

export default ProductCard;
