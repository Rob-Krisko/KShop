import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { products } from '../inventory';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 10px;
`;

const ProductCard = styled.div`
  width: 200px;
  height: 450px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8em;
  margin-bottom: 1em;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8em;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const QuantityButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.2em;
`;

const IncrementButton = styled(QuantityButton)`
  color: green;
`;

const DecrementButton = styled(QuantityButton)`
  color: red;
`;

const Quantity = styled.span`
  font-size: 1.2em;
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

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      setSelectedQuantities(prev => ({ ...prev, [productId]: newQuantity }));
    }
  };

  return (
    <ProductsContainer>
      {categoryProducts.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={`${process.env.PUBLIC_URL}/${product.imageUrl}`} alt={product.name} />
          <h2>{product.name}</h2>
          <Select onChange={(event) => handleVariantChange(product.id, event)}>
            {product.variants.map((variant, variantIndex) => (
              <option key={variantIndex} value={variant.size}>{variant.size} - ${variant.price}</option>
            ))}
          </Select>
          <QuantityContainer>
            <DecrementButton onClick={() => handleQuantityChange(product.id, selectedQuantities[product.id] - 1)}>
              <FiMinus size={20} />
            </DecrementButton>
            <Quantity>{selectedQuantities[product.id] || 1}</Quantity>
            <IncrementButton onClick={() => handleQuantityChange(product.id, selectedQuantities[product.id] + 1 || 2)}>
              <FiPlus size={20} />
            </IncrementButton>
          </QuantityContainer>
          <Button onClick={() => addToCart(product, selectedQuantities[product.id] || 1, selectedVariants[product.id] || product.variants[0].size)}>Add to cart</Button>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
}

export default CategoryPage;
