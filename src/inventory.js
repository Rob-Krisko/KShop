// src/inventory.js

export const categories = [
  'Laundry Items',
  'Paper Items',
  'Household Items',
  'Oral Care Items',
  'Personal Care Items',
  'Medicine',
  'Feminine Care Items',
  'Baby Care Items',
  'Skincare Items'
];

export const products = [
  {
    id: 'p1',
    name: 'Laundry Detergent',
    description: 'Cleans and freshens your clothes',
    imageUrl: 'images/laundry1.png',
    category: 'Laundry Items',
    price: 5.99,
    sizes: ['12 oz', '24 oz', '36 oz']
  },
  {
    id: 'p2',
    name: 'Toilet Paper',
    description: 'Soft and strong toilet paper',
    imageUrl: 'images/paper1.png',
    category: 'Paper Items',
    price: 3.99,
    sizes: ['4 pack', '12 pack', '24 pack']
  },
  {
    id: 'p3',
    name: 'Window Cleaner',
    description: 'Shines and cleans windows',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    price: 4.99,
    sizes: ['16 oz']
  },
  {
    id: 'p4',
    name: 'Toothpaste',
    description: 'Whitens and freshens breath',
    imageUrl: 'images/oral1.png',
    category: 'Oral Care Items',
    price: 2.99,
    sizes: ['4 oz', '8 oz']
  },
  {
    id: 'p5',
    name: 'Hand Soap',
    description: 'Kills germs and leaves hands soft',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    price: 3.49,
    sizes: ['8 oz', '16 oz']
  },
  {
    id: 'p6',
    name: 'Pain Reliever',
    description: 'Relieves minor aches and pains',
    imageUrl: 'images/medicine1.png',
    category: 'Medicine',
    price: 6.99,
    sizes: ['20 count', '50 count']
  },
  {
    id: 'p7',
    name: 'Tampons',
    description: 'Comfortable and reliable',
    imageUrl: 'images/feminine1.png',
    category: 'Feminine Care Items',
    price: 7.99,
    sizes: ['18 count', '36 count']
  },
  {
    id: 'p8',
    name: 'Diapers',
    description: 'Keeps baby dry and comfortable',
    imageUrl: 'images/baby1.png',
    category: 'Baby Care Items',
    price: 9.99,
    sizes: ['Size 1', 'Size 2', 'Size 3']
  },
  {
    id: 'p9',
    name: 'Moisturizer',
    description: 'Hydrates and rejuvenates skin',
    imageUrl: 'images/skincare1.png',
    category: 'Skincare Items',
    price: 10.99,
    sizes: ['2 oz', '4 oz']
  },
];
