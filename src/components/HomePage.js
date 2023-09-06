import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ProductCard from './ProductCard'; 
import { products } from '../inventory'; 

const ItemsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function HomePage() {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [promotedItems, setPromotedItems] = useState([]);

  // Function to get random items
  const getRandomItems = (items, n) => {
    let result = new Array(n),
        len = items.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandomItems: more elements taken than available");
    while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = items[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  // Function to get promoted items
  const getPromotedItems = (ids) => {
    return products.filter(product => ids.includes(product.id));
  }

  useEffect(() => {
    setFeaturedItems(getRandomItems(products, 4));

    // Set promoted items
    // Replace these with the actual product ids of the products you want to promote
    setPromotedItems(getPromotedItems(['p4', 'p6']));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Welcome to KShop</title>
      </Helmet>
      <div>
        <h2>Promoted Items</h2>
        <ItemsGrid>
          {promotedItems.map(item => <ProductCard key={item.id} product={item} />)}
        </ItemsGrid>
      </div>
      <div>
        <h2>Featured Items</h2>
        <ItemsGrid>
          {featuredItems.map(item => <ProductCard key={item.id} product={item} />)}
        </ItemsGrid>
      </div>
    </div>
  );
}

export default HomePage;
