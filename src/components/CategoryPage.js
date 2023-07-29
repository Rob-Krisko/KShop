// src/components/CategoryPage.js

import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../inventory';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const ProductCard = styled.div`
  width: 200px;
  height: 350px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

function CategoryPage() {
  const { categoryName } = useParams();
  const { addToCart } = useContext(CartContext);
  const displayCategoryName = categoryName.replace(/-/g, ' ');

  const categoryProducts = products.filter(
    product => product.category.toLowerCase() === displayCategoryName.toLowerCase()
  );

  const [selectedVariants, setSelectedVariants] = useState({});
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const handleVariantChange = (productId, event) => {
    setSelectedVariants(prev => ({ ...prev, [productId]: event.target.value }));
  };

  const handleQuantityChange = (productId, event) => {
    setSelectedQuantities(prev => ({ ...prev, [productId]: parseInt(event.target.value) }));
  };

  return (
    <div>
      <h1>{displayCategoryName}</h1>
      {categoryProducts.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={`${process.env.PUBLIC_URL}/${product.imageUrl}`} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <select onChange={(event) => handleVariantChange(product.id, event)}>
            {product.variants.map((variant, variantIndex) => (
              <option key={variantIndex} value={variant.size}>{variant.size} - ${variant.price}</option>
            ))}
          </select>
          <input type="number" min="1" defaultValue={1} onChange={(event) => handleQuantityChange(product.id, event)} />
          <button onClick={() => addToCart(product, selectedQuantities[product.id] || 1, selectedVariants[product.id] || product.variants[0].size)}>Add to cart</button>
        </ProductCard>
      ))}
    </div>
  );
}

export default CategoryPage;
