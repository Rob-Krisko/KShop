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
    imageUrl: 'images/laundry/gain-bead.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '5.7 oz', price: 7 },
      { size: '14.8 oz', price: 8 },
    ]
  },
  {
    id: 'p2',
    name: 'Downy Scent Beads',
    imageUrl: 'images/laundry/downy-bead.jpg',
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
    imageUrl: 'images/laundry/purex-bead.jpg',
    category: 'Laundry Items',
    variants: [
      { size: 'need size', price: 3.50 },
    ]
  },
  {
    id: 'p4',
    name: 'Gain Pods',
    imageUrl: 'images/laundry/gain-pod.jpg',
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
    imageUrl: 'images/laundry/gain-liquid.jpg',
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
    imageUrl: 'images/laundry/gain-softener.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '48 Loads', price: 3.50 },
    ]
  },
  {
    id: 'p7',
    name: 'Gain Dryer Sheets',
    imageUrl: 'images/laundry/gain-sheets.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '105 ct', price: 4 },
    ]
  },
  {
    id: 'p8',
    name: 'Snuggle Dryer Sheets',
    imageUrl: 'images/laundry/snuggle-sheet.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '40 ct', price: 1 },
      { size: '70-80 ct', price: 2 }
    ]
  },
  {
    id: 'p9',
    name: 'Bounce Dryer Sheets',
    imageUrl: 'images/laundry/bounce-sheets.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '40 ct', price: 1 },
      { size: '120 ct', price: 4.5 },
      { size: '160 ct', price: 5 },
      { size: '240 ct', price: 7.5 }
    ]
  },
  {
    id: 'p10',
    name: 'Tide Simply Pods',
    imageUrl: 'images/laundry/tide-simply.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '12-14 ct', price: 3 }
    ]
  },
  {
    id: 'p11',
    name: 'Tide Pods',
    imageUrl: 'images/laundry/tide-pods.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '12 ct', price: 3.5 },
      { size: '42 ct', price: 10.5 },
      { size: '42 ct refill', price: 9 }
    ]
  },
  {
    id: 'p12',
    name: 'Tide Power Pods w/ Oxi',
    imageUrl: 'images/laundry/tide-power.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '25 ct', price: 7 }
    ]
  },
  {
    id: 'p13',
    name: 'Tide Ultra Oxi 4-in-1 Pods',
    imageUrl: 'images/laundry/tide-ultra-oxi.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '32 ct', price: 9 },
      { size: '32 ct refill', price: 8 }
    ]
  },
  {
    id: 'p14',
    name: 'Tide Free&Gentle Pods',
    imageUrl: 'images/laundry/tide-free-gentle.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '16 ct', price: 4 }
    ]
  },
  {
    id: 'p15',
    name: 'Tide Coral Blast Detergent',
    imageUrl: 'images/laundry/tide-coral.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '92 oz', price: 10 }
    ]
  },
  {
    id: 'p16',
    name: 'Tide W/ Downy Detergent',
    imageUrl: 'images/laundry/tide-downy.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '92 oz', price: 10 },
      { size: '92 oz (2 for 16)', price: 16 } // Noted as "2 for 16", adjusted for a single unit price.
    ]
  },
  {
    id: 'p17',
    name: 'All Free & Gentle Detergent',
    imageUrl: 'images/laundry/all-free-clear.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '36 oz', price: 2.5 }
    ]
  },
  {
    id: 'p18',
    name: 'Downy Infusions Softener',
    imageUrl: 'images/laundry/downy-infusions.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '32 oz', price: 4 }
    ]
  },
  {
    id: 'p19',
    name: 'Persil Detergent',
    imageUrl: 'images/laundry/persil-liquid.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '40 oz', price: 4 }
    ]
  },
  {
    id: 'p20',
    name: 'Persil Pods',
    imageUrl: 'images/laundry/persil-pods.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '40 ct', price: 10 }
    ]
  },
  {
    id: 'p21',
    name: 'Lysol Laundry Sanitizer',
    imageUrl: 'images/laundry/lysol-sani.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '41 oz', price: 4.5 }
    ]
  },
  {
    id: 'p22',
    name: 'Arm & Hammer w/ Oxi Pods',
    imageUrl: 'images/laundry/arm-hammer-oxi.jpg',
    category: 'Laundry Items',
    variants: [
      { size: '24 ct', price: 4 }
    ]
  },
  {
    id: 'p23',
    name: '9 Elements Detergent and Softener',
    imageUrl: 'images/laundry/9elements-detergent.jpg',
    category: 'Laundry Items',
    variants: [
      { size: 'need', price: 8 }
    ]
  },
  {
    id: 'p24',
    name: 'Kleenex /Puffs Tissues',
    imageUrl: 'images/paper/kleenex.jpg',
    category: 'Paper Items',
    variants: [
      { size: 'one box', price: 1.5 }  // As it's "2 for 3", adjusted for a single unit price.
    ]
  },
  {
    id: 'p25',
    name: 'Scott Toilet Paper',
    imageUrl: 'images/paper/scott-tp.jpg',
    category: 'Paper Items',
    variants: [
      { size: '12 rolls', price: 3.5 }
    ]
  },
  {
    id: 'p26',
    name: 'AngelSoft Toilet Paper',
    imageUrl: 'images/paper/angelsoft-tp.jpg',
    category: 'Paper Items',
    variants: [
      { size: '6=24 rolls', price: 4.5 }
    ]
  },
  {
    id: 'p27',
    name: 'Cottonelle Toilet Paper',
    imageUrl: 'images/paper/cottonelle-tp.jpg',
    category: 'Paper Items',
    variants: [
      { size: '6=24 rolls', price: 5 }
    ]
  },
  {
    id: 'p28',
    name: 'Charmin 1ply Toilet Paper',
    imageUrl: 'images/paper/charmin-tp.jpg',
    category: 'Paper Items',
    variants: [
      { size: '6=24 rolls', price: 5 }
    ]
  },
  {
    id: 'p29',
    name: 'Charmin Flushable Wipes',
    imageUrl: 'images/paper/charmin-wipes.jpg',
    category: 'Paper Items',
    variants: [
      { size: '40 ct', price: 2.5 }
    ]
  },
  {
    id: 'p30',
    name: 'Scott Paper Towels',
    imageUrl: 'images/paper/scott-pt.jpg',
    category: 'Paper Items',
    variants: [
      { size: '6=7 rolls', price: 4 }
    ]
  },
  {
    id: 'p31',
    name: 'Viva Paper Towels',
    imageUrl: 'images/paper/viva-pt.jpg',
    category: 'Paper Items',
    variants: [
      { size: '6 rolls', price: 5 }
    ]
  },
  {
    id: 'p32',
    name: 'Brawny Paper Towels',
    imageUrl: 'images/paper/brawny-pt.jpg',
    category: 'Paper Items',
    variants: [
      { size: '2=4 rolls', price: 3 }
    ]
  },
  {
    id: 'p33',
    name: 'Bounty Paper Towels',
    imageUrl: 'images/paper/bounty-pt.jpg',
    category: 'Paper Items',
    variants: [
      { size: '2=4 rolls', price: 3 }
    ]
  },
  {
    id: 'p34',
    name: 'Bic Multipurpose Lighter',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '1', price: 3.5 }
    ]
  },
  {
    id: 'p35',
    name: 'AAA Batteries',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '48 ct', price: 10 }
    ]
  },
  {
    id: 'p36',
    name: 'Dial Hand Soap',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '7.5 oz', price: 1 }
    ]
  },
  {
    id: 'p37',
    name: 'Febreeze Air Effects Spray',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '1 Spray', price: 2.5 },
      { size: '2 Sprays', price: 4 }
    ]
  },
  {
    id: 'p38',
    name: 'Febreeze Small Spaces',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '1pk', price: 2 }
    ]
  },
  {
    id: 'p39',
    name: 'Clorox Disinfecting Spray',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '1 spray', price: 4.5 }
    ]
  },
  {
    id: 'p40',
    name: 'Clorox Disinfecting Mist',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: 'refill', price: 4 }
    ]
  },
  {
    id: 'p41',
    name: '9elements Organic Cleaning Spray',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: 'size', price: 3 }
    ]
  },
  {
    id: 'p42',
    name: '9elements Organinc Dish Soap',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: 'Lemon', price: 3 }
    ]
  },
  {
    id: 'p43',
    name: 'Palmolive Dish Soap',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '20oz', price: 2 }
    ]
  },
  {
    id: 'p44',
    name: 'Dawn Dish Soap',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: 'Small', price: 1 },
      { size: '32oz', price: 4 },
      { size: '56oz', price: 6 }
    ]
  },
  {
    id: 'p45',
    name: 'Dawn Power Wash',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: 'Refill', price: 3 }
    ]
  },
  {
    id: 'p46',
    name: 'Lysol Wipes',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '30ct', price: 2.5 },
      { size: '80ct', price: 5 }
    ]
  },
  {
    id: 'p47',
    name: 'Swiffer Wet Pads',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '12 ct', price: 7 }
    ]
  },
  {
    id: 'p48',
    name: 'Wipe Out Disinfecting Wipes',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '80ct', price: 3 }
    ]
  },
  {
    id: 'p49',
    name: 'Mr Clean Magic Eraser',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '2 pack', price: 2 }
    ]
  },
  {
    id: 'p50',
    name: 'Dishwasher Tabs',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '20-25 ct', price: 5 },
      { size: '36 ct', price: 7 }
    ]
  },
  {
    id: 'p51',
    name: 'Finish Rinse Aid',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: 'one size', price: 3 }
    ]
  },
  {
    id: 'p52',
    name: 'Air Wick Plugins',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: '2 oil + warmer', price: 3 },
      { size: '1 Oil 1 warmer', price: 1.5 }
    ]
  },
  {
    id: 'p53',
    name: 'Febreeze Plug ins',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: 'Oil + Warmer', price: 3 },
      { size: '2 Oils', price: 5 }
    ]
  },
  {
    id: 'p54',
    name: 'Umbrella',
    imageUrl: 'images/household1.png',
    category: 'Household Items',
    variants: [
      { size: 'small', price: 7 }
    ]
  },
  {
    id: 'p55',
    name: 'Toothbrush',
    imageUrl: 'images/oral1.png',
    category: 'Oral Care Items',
    variants: [
      { size: 'single', price: 1 }
    ]
  },
  {
    id: 'p56',
    name: 'Toothpaste',
    imageUrl: 'images/oral1.png',
    category: 'Oral Care Items',
    variants: [
      { size: 'under 3.5 oz', price: 1 },
      { size: 'over 3.5 oz', price: 1.5 }
    ]
  },
  {
    id: 'p57',
    name: 'Kids Toothpaste',
    imageUrl: 'images/oral1.png',
    category: 'Oral Care Items',
    variants: [
      { size: 'one size', price: 1 }
    ]
  },
  {
    id: 'p58',
    name: 'Oral-B floss',
    imageUrl: 'images/oral1.png',
    category: 'Oral Care Items',
    variants: [
      { size: 'one size', price: 1 }
    ]
  },
  {
    id: 'p59',
    name: 'Colgate Mouthwash',
    imageUrl: 'images/oral1.png',
    category: 'Oral Care Items',
    variants: [
      { size: 'size', price: 3 }
    ]
  },
  {
    id: 'p60',
    name: 'Scope Mouthwash',
    imageUrl: 'images/oral1.png',
    category: 'Oral Care Items',
    variants: [
      { size: '1 Litre', price: 3.5 }
    ]
  },
  {
    id: 'p61',
    name: 'Caress Body Wash',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'size', price: 5.5 }
    ]
  },
  {
    id: 'p62',
    name: 'Dove Shampoo & Conditioner',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: '1 of each', price: 6 }
    ]
  },
  {
    id: 'p63',
    name: 'Pantene Shampoo & Conditioner',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: '1 of each', price: 5 }
    ]
  },
  {
    id: 'p64',
    name: 'Suave Mens Body Wash',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'size', price: 1.5 }
    ]
  },
  {
    id: 'p65',
    name: 'Nivea Womens Body Wash',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: '20 oz', price: 3.5 }
    ]
  },
  {
    id: 'p66',
    name: 'Nivea Mens Body Wash',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: '16.9 oz', price: 2.5 }
    ]
  },
  {
    id: 'p67',
    name: 'Dove Ladies Body Wash',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'size', price: 5.5 }
    ]
  },
  {
    id: 'p68',
    name: 'Dove Mens Body Wash',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'size', price: 5 }
    ]
  },
  {
    id: 'p69',
    name: 'Olay Body Wash',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'small', price: 5 },
      { size: 'large w/ pump', price: 6.5 }
    ]
  },
  {
    id: 'p70',
    name: 'Dove Bar Soap',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'Single', price: 1 },
      { size: '2 pack', price: 1.5 },
      { size: '3 pack', price: 2.5 }
    ]
  },
  {
    id: 'p71',
    name: 'Degree Womens Deodorant',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'Stick', price: 3 },
      { size: 'Spray', price: 4 }
    ]
  },
  {
    id: 'p72',
    name: 'Toms Lady Deodorant',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'Aluminum Free', price: 3 }
    ]
  },
  {
    id: 'p73',
    name: 'Dove 0% Aluminum Free',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'Stick', price: 5 },
      { size: 'Spray', price: 6 }
    ]
  },
  {
    id: 'p74',
    name: 'Dove Deodorant (with aluminum)',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'Spray', price: 5.5 }
    ]
  },
  {
    id: 'p75',
    name: 'Axe Mens Deodorant',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'Spray', price: 3 }
    ]
  },
  {
    id: 'p76',
    name: 'Degree Mens Deodorant',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'Stick', price: '2 for 7' },
      { size: 'Spray', price: 4 }
    ]
  },
  {
    id: 'p77',
    name: 'Nivea Lotion',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'small', price: 3 },
      { size: 'large', price: 4 }
    ]
  },
  {
    id: 'p78',
    name: 'Aveeno Lotion',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: '12 oz', price: 4 }
    ]
  },
  {
    id: 'p79',
    name: 'Gillette Mach 3 Razor',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'size', price: 5 }
    ]
  },
  {
    id: 'p80',
    name: 'Schick Stubble Eraser Razor',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'size', price: 4 }
    ]
  },
  {
    id: 'p81',
    name: 'Schick 3 Blade Razor',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: '3 Cartridges', price: 4 },
      { size: '4 disposable', price: 4 }
    ]
  },
  {
    id: 'p82',
    name: 'Bic Disposable Razor',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: '3 pack', price: 3 }
    ]
  },
  {
    id: 'p83',
    name: 'Venus 3 Blade Razor',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: '1 cartridge', price: 4 },
      { size: '2 cartridges', price: 5 }
    ]
  },
  {
    id: 'p84',
    name: 'Skintimate Disposable Razor',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: '4 pack', price: 4 }
    ]
  },
  {
    id: 'p85',
    name: 'Skintimate 4 Blade Razor',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: '2 Cartridges', price: 8 },
      { size: '+4 Cartridges', price: 12 }
    ]
  },
  {
    id: 'p86',
    name: 'Nivea Mens Shave',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'Gel', price: 3.5 },
      { size: 'Foam', price: 3 }
    ]
  },
  {
    id: 'p87',
    name: 'Blade Shave Gel',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'size', price: 2 }
    ]
  },
  {
    id: 'p88',
    name: 'Shaving Cream',
    imageUrl: 'images/personal1.png',
    category: 'Personal Care Items',
    variants: [
      { size: 'Barbasol', price: 1 },
      { size: 'Gillette', price: 1 }
    ]
  },
  {
    id: 'p89',
    name: 'Icy Hot',
    imageUrl: 'images/medicine1.png',
    category: 'Medicine',
    variants: [
      { size: 'Patches', price: 5 },
      { size: 'Cream', price: 5 }
    ]
  },
  {
    id: 'p90',
    name: 'Motrin (200mg)',
    imageUrl: 'images/medicine1.png',
    category: 'Medicine',
    variants: [
      { size: '50 tablets', price: 3 },
      { size: '100 tablets', price: 5 }
    ]
  },
  {
    id: 'p91',
    name: 'U by Kotex',
    imageUrl: 'images/feminine1.png',
    category: 'Feminine Care Items',
    variants: [
      { size: 'Liners', price: 2.5 }
    ]
  },
  {
    id: 'p92',
    name: 'One by Poise',
    imageUrl: 'images/feminine1.png',
    category: 'Feminine Care Items',
    variants: [
      { size: 'Pads', price: 3 },
      { size: 'Liners', price: 3 }
    ]
  },
  {
    id: 'p93',
    name: 'Carefree / Stayfree',
    imageUrl: 'images/feminine1.png',
    category: 'Feminine Care Items',
    variants: [
      { size: 'Pads', price: 2 },
      { size: 'Liners', price: 2 }
    ]
  },
  {
    id: 'p94',
    name: 'Cetaphil Baby Wash',
    imageUrl: 'images/baby1.png',
    category: 'Baby Care Items',
    variants: [
      { size: 'size', price: 4 }
    ]
  },
  {
    id: 'p95',
    name: 'Luvs Diapers',
    imageUrl: 'images/baby1.png',
    category: 'Baby Care Items',
    variants: [
      { size: 'Size N', price: 5 },
      { size: 'Size 1', price: 5 },
      { size: 'Size 2', price: 5 },
      { size: 'Size 3', price: 5 }
    ]
  },
  {
    id: 'p96',
    name: 'Huggies Little Swimmers',
    imageUrl: 'images/baby1.png',
    category: 'Baby Care Items',
    variants: [
      { size: 'size 4', price: 5 }
    ]
  },
  {
    id: 'p97',
    name: 'Huggies Diapers',
    imageUrl: 'images/baby1.png',
    category: 'Baby Care Items',
    variants: [
      { size: 'Size 4 / 76 ct', price: 18 },
      { size: 'Size 5 / 68 ct', price: 18 }
    ]
  },
  {
    id: 'p98',
    name: 'Pampers Swimmers',
    imageUrl: 'images/baby1.png',
    category: 'Baby Care Items',
    variants: [
      { size: 'small', price: 5 }
    ]
  },
  {
    id: 'p99',
    name: 'Diaper Wipes',
    imageUrl: 'images/baby1.png',
    category: 'Baby Care Items',
    variants: [
      { size: 'small', price: 1 },
      { size: 'large', price: 3 }
    ]
  },
  {
    id: 'p100',
    name: 'Johnsons Lotion',
    imageUrl: 'images/baby1.png',
    category: 'Baby Care Items',
    variants: [
      { size: 'size', price: 2.5 }
    ]
  },
  {
    id: 'p101',
    name: 'Baby Dove Hypoallergenic',
    imageUrl: 'images/baby1.png',
    category: 'Baby Care Items',
    variants: [
      { size: 'wash', price: 3 },
      { size: 'lotion', price: 3 }
    ]
  },
  {
    id: 'p102',
    name: 'Vichy Acne Serum',
    imageUrl: 'images/skincare1.png',
    category: 'Skincare Items',
    variants: [
      { size: 'size', price: 20 }
    ]
  },
  {
    id: 'p103',
    name: 'Neutrogena Acne',
    imageUrl: 'images/skincare1.png',
    category: 'Skincare Items',
    variants: [
      { size: 'size', price: 5 }
    ]
  },
  {
    id: 'p104',
    name: 'Band-aids',
    imageUrl: 'images/skincare1.png',
    category: 'Skincare Items',
    variants: [
      { size: 'assorted', price: 2 }
    ]
  },
  {
    id: 'p105',
    name: 'Differin Skincare',
    imageUrl: 'images/skincare1.png',
    category: 'Skincare Items',
    variants: [
      { size: 'Cleanser', price: 5 },
      { size: 'Toner', price: 5 }
    ]
  },
  {
    id: 'p106',
    name: 'Cetaphil',
    imageUrl: 'images/skincare1.png',
    category: 'Skincare Items',
    variants: [
      { size: 'Face Wipes', price: 5 },
      { size: 'Cleanser', price: 5 },
      { size: 'Mini Cleanser', price: '2 for 1' },
      { size: 'Mini Lotion', price: '2 for 1' }
    ]
  },
  {
    id: 'p107',
    name: 'L\'Oreal',
    imageUrl: 'images/skincare1.png',
    category: 'Skincare Items',
    variants: [
      { size: 'Cleanser', price: 5 }
    ]
  },
  {
    id: 'p108',
    name: 'Olay Cleanser',
    imageUrl: 'images/skincare1.png',
    category: 'Skincare Items',
    variants: [
      { size: 'Vitamin C', price: 3.5 },
      { size: 'Shea Peptide', price: 3.5 },
      { size: '7-in-1', price: 3.5 }
    ]
  }  

];
