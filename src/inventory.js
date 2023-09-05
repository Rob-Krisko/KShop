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
    name: 'Gain Scent Beads',
    imageUrl: 'images/laundry1.png',
    category: 'Laundry Items',
    variants: [
      { size: '5.7 oz', price: 7 },
      { size: '14.8 oz', price: 8 },
    ]
  },
  {
    id: 'p2',
    name: 'Downy Scent Beads',
    imageUrl: 'images/laundry1.png',
    category: 'Laundry Items',
    variants: [
      { size: '5.7 oz', price: 4 },
      { size: '10 oz', price: 6 },
      { size: '14.8 oz', price: 8 },
    ]
  },
  {
    id: 'p3',
    name: 'Purex Scent Beads',
    imageUrl: 'images/laundry1.png',
    category: 'Laundry Items',
    variants: [
      { size: 'need size', price: 3.50 },
    ]
  },
  {
    id: 'p4',
    name: 'Gain Pods',
    imageUrl: 'images/laundry1.png',
    category: 'Laundry Items',
    variants: [
      { size: '42 ct', price: 10 },
      { size: '42 ct Refill', price: 9 },
      { size: '60 ct', price: 12 },
      { size: '60 ct Refill', price: 11 },
    ]
  },
  {
    id: 'p5',
    name: 'Gain Liquid Detergent',
    imageUrl: 'images/laundry1.png',
    category: 'Laundry Items',
    variants: [
      { size: '32 Loads', price: 3.50 },
      { size: '107 Loads', price: 9 },
      { size: '128 Loads', price: 15 },
    ]
  },
  {
    id: 'p6',
    name: 'Gain Fabric Softener',
    imageUrl: 'images/laundry1.png',
    category: 'Laundry Items',
    variants: [
      { size: '48 Loads', price: 3.50 },
    ]
  },
  {
    id: 'p7',
    name: 'Gain Dryer Sheets',
    imageUrl: 'images/laundry1.png',
    category: 'Laundry Items',
    variants: [
      { size: '105 ct', price: 4 },
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
