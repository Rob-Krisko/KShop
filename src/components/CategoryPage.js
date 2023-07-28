// src/components/CategoryPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../inventory';
import styled from 'styled-components';

const ProductCard = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

function CategoryPage() {
  // Get the categoryName parameter from the route
  const { categoryName } = useParams();
  // Convert the categoryName back to a format suitable for display (replace '-' with ' ')
  const displayCategoryName = categoryName.replace(/-/g, ' ');

  // Filter the products to get only the products of this category
  const categoryProducts = products.filter(
    product => product.category.toLowerCase() === displayCategoryName.toLowerCase()
  );

  return (
    <div>
      <h1>{displayCategoryName}</h1>
      {categoryProducts.map((product, index) => (
        <ProductCard key={index}>  {/* Use the styled ProductCard component */}
          {/* Use the styled ProductImage component */}
          <ProductImage src={`${process.env.PUBLIC_URL}/${product.imageUrl}`} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </ProductCard>
      ))}
    </div>
  );
}

export default CategoryPage;
