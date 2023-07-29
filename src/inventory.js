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
    variants: [
      { size: '12 oz', price: 4.99 },
      { size: '24 oz', price: 6.99 },
      { size: '36 oz', price: 8.99 },
    ]
  },
  {
    id: 'p2',
    name: 'Toilet Paper',
    description: 'Soft and strong toilet paper',
    imageUrl: 'images/paper1.png',
    category: 'Paper Items',
    variants: [
      { size: '4 pack', price: 3.99 },
      { size: '12 pack', price: 6.99 },
      { size: '24 pack', price: 9.99 },
    ]
  },
  {
    id: 'p3',
    name: 'Window Cleaner',
    description: 'Shines and cleans windows',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '16 oz', price: 4.99 },
    ]
  },
  {
    id: 'p4',
    name: 'Toothpaste',
    description: 'Whitens and freshens breath',
    imageUrl: 'images/oral1.png',
    category: 'Oral Care Items',
    variants: [
      { size: '4 oz', price: 2.99 },
      { size: '8 oz', price: 4.99 },
    ]
  },
  {
    id: 'p5',
    name: 'Hand Soap',
    description: 'Kills germs and leaves hands soft',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: '8 oz', price: 3.49 },
      { size: '16 oz', price: 4.99 },
    ]
  },
  {
    id: 'p6',
    name: 'Pain Reliever',
    description: 'Relieves minor aches and pains',
    imageUrl: 'images/medicine1.png',
    category: 'Medicine',
    variants: [
      { size: '20 count', price: 6.99 },
      { size: '50 count', price: 9.99 },
    ]
  },
  {
    id: 'p7',
    name: 'Tampons',
    description: 'Comfortable and reliable',
    imageUrl: 'images/feminine1.png',
    category: 'Feminine Care Items',
    variants: [
      { size: '18 count', price: 7.99 },
      { size: '36 count', price: 11.99 },
    ]
  },
  {
    id: 'p8',
    name: 'Diapers',
    description: 'Keeps baby dry and comfortable',
    imageUrl: 'images/baby1.png',
    category: 'Baby Care Items',
    variants: [
      { size: 'Size 1', price: 9.99 },
      { size: 'Size 2', price: 12.99 },
      { size: 'Size 3', price: 15.99 },
    ]
  },
  {
    id: 'p9',
    name: 'Moisturizer',
    description: 'Hydrates and rejuvenates skin',
    imageUrl: 'images/skincare1.png',
    category: 'Skincare Items',
    variants: [
      { size: '2 oz', price: 10.99 },
      { size: '4 oz', price: 13.99 },
    ]
  },
];
