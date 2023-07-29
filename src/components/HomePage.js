// HomePage.js

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ProductCard from './ProductCard'; 
import { products } from '../inventory'; 

const FeaturedItemsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function HomePage() {
  const [featuredItems, setFeaturedItems] = useState([]);

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

  useEffect(() => {
    // On component mount, get 3 random items from inventory
    setFeaturedItems(getRandomItems(products, 5));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Welcome to KShop</title>
      </Helmet>
      <p>Find your daily essentials here.</p>
      <div>
        <h2>Featured Items</h2>
        <FeaturedItemsGrid>
          {featuredItems.map(item => <ProductCard key={item.id} product={item} />)}
        </FeaturedItemsGrid>
      </div>
    </div>
  );
}

export default HomePage;
