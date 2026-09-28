// Données des ingrédients (50 ingrédients répartis en 7 catégories)
export const ingredients = [
  // === LÉGUMES ===
  { id: 'tomato', name: 'Tomate', icon: '🍅', category: 'Légumes', unit: 'pce' },
  { id: 'potato', name: 'Pomme de terre', icon: '🥔', category: 'Légumes', unit: 'pce' },
  { id: 'carrot', name: 'Carotte', icon: '🥕', category: 'Légumes', unit: 'pce' },
  { id: 'onion', name: 'Oignon', icon: '🧅', category: 'Légumes', unit: 'pce' },
  { id: 'garlic', name: 'Ail', icon: '🧄', category: 'Légumes', unit: 'gousse' },
  { id: 'pepper', name: 'Poivron', icon: '🫑', category: 'Légumes', unit: 'pce' },
  { id: 'zucchini', name: 'Courgette', icon: '🥒', category: 'Légumes', unit: 'pce' },
  { id: 'eggplant', name: 'Aubergine', icon: '🍆', category: 'Légumes', unit: 'pce' },
  { id: 'mushroom', name: 'Champignon', icon: '🍄', category: 'Légumes', unit: 'g' },
  { id: 'broccoli', name: 'Brocoli', icon: '🥦', category: 'Légumes', unit: 'pce' },
  { id: 'salad', name: 'Salade', icon: '🥬', category: 'Légumes', unit: 'pce' },
  { id: 'corn', name: 'Maïs', icon: '🌽', category: 'Légumes', unit: 'g' },
  { id: 'avocado', name: 'Avocat', icon: '🥑', category: 'Légumes', unit: 'pce' },
  { id: 'cucumber', name: 'Concombre', icon: '🥒', category: 'Légumes', unit: 'pce' },

  // === PROTÉINES ===
  { id: 'egg', name: 'Œuf', icon: '🥚', category: 'Protéines', unit: 'pce' },
  { id: 'chicken', name: 'Poulet', icon: '🍗', category: 'Protéines', unit: 'g' },
  { id: 'beef', name: 'Bœuf', icon: '🥩', category: 'Protéines', unit: 'g' },
  { id: 'ham', name: 'Jambon', icon: '🍖', category: 'Protéines', unit: 'tranche' },
  { id: 'fish', name: 'Poisson', icon: '🐟', category: 'Protéines', unit: 'g' },
  { id: 'shrimp', name: 'Crevettes', icon: '🦐', category: 'Protéines', unit: 'g' },
  { id: 'bacon', name: 'Bacon', icon: '🥓', category: 'Protéines', unit: 'tranche' },
  { id: 'tofu', name: 'Tofu', icon: '⬜', category: 'Protéines', unit: 'g' },
  { id: 'sausage', name: 'Saucisse', icon: '🌭', category: 'Protéines', unit: 'pce' },

  // === FÉCULENTS ===
  { id: 'pasta', name: 'Pâtes', icon: '🍝', category: 'Féculents', unit: 'g' },
  { id: 'rice', name: 'Riz', icon: '🍚', category: 'Féculents', unit: 'g' },
  { id: 'bread', name: 'Pain', icon: '🍞', category: 'Féculents', unit: 'tranche' },
  { id: 'noodles', name: 'Nouilles', icon: '🍜', category: 'Féculents', unit: 'g' },
  { id: 'couscous', name: 'Couscous', icon: '🌾', category: 'Féculents', unit: 'g' },
  { id: 'lentils', name: 'Lentilles', icon: '🫘', category: 'Féculents', unit: 'g' },

  // === PRODUITS LAITIERS ===
  { id: 'cheese', name: 'Fromage', icon: '🧀', category: 'Laitage', unit: 'g' },
  { id: 'milk', name: 'Lait', icon: '🥛', category: 'Laitage', unit: 'ml' },
  { id: 'butter', name: 'Beurre', icon: '🧈', category: 'Laitage', unit: 'g' },
  { id: 'cream', name: 'Crème fraîche', icon: '🥛', category: 'Laitage', unit: 'ml' },
  { id: 'yogurt', name: 'Yaourt', icon: '🥛', category: 'Laitage', unit: 'pce' },

  // === ÉPICERIE ===
  { id: 'flour', name: 'Farine', icon: '🌾', category: 'Épicerie', unit: 'g' },
  { id: 'oil', name: 'Huile', icon: '🫗', category: 'Épicerie', unit: 'cs' },
  { id: 'honey', name: 'Miel', icon: '🍯', category: 'Épicerie', unit: 'cs' },
  { id: 'sugar', name: 'Sucre', icon: '🍬', category: 'Épicerie', unit: 'g' },
  { id: 'tomato_sauce', name: 'Sauce tomate', icon: '🥫', category: 'Épicerie', unit: 'g' },
  { id: 'soy_sauce', name: 'Sauce soja', icon: '🥫', category: 'Épicerie', unit: 'cs' },

  // === FRUITS ===
  { id: 'lemon', name: 'Citron', icon: '🍋', category: 'Fruits', unit: 'pce' },
  { id: 'apple', name: 'Pomme', icon: '🍎', category: 'Fruits', unit: 'pce' },
  { id: 'banana', name: 'Banane', icon: '🍌', category: 'Fruits', unit: 'pce' },

  // === HERBES & ÉPICES ===
  { id: 'basil', name: 'Basilic', icon: '🌿', category: 'Herbes', unit: 'brin' },
  { id: 'parsley', name: 'Persil', icon: '🌿', category: 'Herbes', unit: 'brin' },
  { id: 'thyme', name: 'Thym', icon: '🌿', category: 'Herbes', unit: 'brin' },
];

// Données des recettes (32 recettes réparties en 8 catégories)
export const recipes = [
  // === PETITS DÉJEUNERS ===
  {
    id: 1,
    title: 'Omelette aux fines herbes',
    ingredients: [
      { id: 'egg', amount: 3 },
      { id: 'butter', amount: 10 },
      { id: 'garlic', amount: 1 }
    ],
    time: '10 min',
    difficulty: 'Facile',
    category: 'Petit-déjeuner',
    image: 'https://images.unsplash.com/photo-1510629954389-c1e0da47d415?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Battez les œufs avec du sel et du poivre.',
      'Faites fondre le beurre dans une poêle.',
      'Versez les œufs et remuez doucement.',
      'Laissez cuire jusqu’à la consistance souhaitée.'
    ]
  },
  {
    id: 2,
    title: 'Œufs Brouillés au Bacon',
    ingredients: [
      { id: 'egg', amount: 3 },
      { id: 'bacon', amount: 3 },
      { id: 'butter', amount: 10 }
    ],
    time: '10 min',
    difficulty: 'Très Facile',
    category: 'Petit-déjeuner',
    image: 'https://images.unsplash.com/photo-1525351484163-75417483356a?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites dorer le bacon dans une poêle.',
      'Battez les œufs dans un bol avec du beurre fondu.',
      'Versez sur le bacon en remuant constamment.',
      'Servez immédiatement.'
    ]
  },
  {
    id: 3,
    title: 'Pancakes Rapides',
    ingredients: [
      { id: 'flour', amount: 200 },
      { id: 'egg', amount: 2 },
      { id: 'milk', amount: 250 },
      { id: 'butter', amount: 30 },
      { id: 'honey', amount: 3 }
    ],
    time: '20 min',
    difficulty: 'Facile',
    category: 'Petit-déjeuner',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7c7c0bb?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Mélangez la farine, les œufs et le lait.',
      'Faites fondre le beurre et ajoutez-le.',
      'Faites cuire des petits tas dans une poêle.',
      'Servez avec du miel.'
    ]
  },

  // === PÂTES & RIZ ===
  {
    id: 4,
    title: 'Pâtes à la sauce tomate fraîche',
    ingredients: [
      { id: 'pasta', amount: 200 },
      { id: 'tomato', amount: 3 },
      { id: 'onion', amount: 1 },
      { id: 'garlic', amount: 1 },
      { id: 'oil', amount: 2 }
    ],
    time: '20 min',
    difficulty: 'Moyen',
    category: 'Pâtes & Riz',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites cuire les pâtes.',
      'Faites revenir l\’oignon et l\’ail dans l\’huile.',
      'Ajoutez les tomates coupées et laissez mijoter.',
      'Mélangez avec les pâtes.'
    ]
  },
  {
    id: 5,
    title: 'Pâtes Carbonara',
    ingredients: [
      { id: 'pasta', amount: 200 },
      { id: 'egg', amount: 2 },
      { id: 'bacon', amount: 100 },
      { id: 'cheese', amount: 50 }
    ],
    time: '20 min',
    difficulty: 'Moyen',
    category: 'Pâtes & Riz',
    image: 'https://images.unsplash.com/photo-1612874742237-6520220e296c?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites cuire les pâtes al dente.',
      'Faites dorer le bacon coupé en lardons.',
      'Battez les œufs avec le fromage râpé.',
      'Mélangez le tout hors du feu.'
    ]
  },
  {
    id: 6,
    title: 'Riz sauté aux légumes',
    ingredients: [
      { id: 'rice', amount: 150 },
      { id: 'carrot', amount: 2 },
      { id: 'onion', amount: 1 },
      { id: 'garlic', amount: 1 },
      { id: 'oil', amount: 2 }
    ],
    time: '15 min',
    difficulty: 'Facile',
    category: 'Pâtes & Riz',
    image: 'https://images.unsplash.com/photo-1512058560366-cd2429ff5c7c?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites cuire le riz.',
      'Sauté les carottes et l\’oignon hachés.',
      'Ajoutez le riz et mélangez bien.',
      'Saisissez à feu vif quelques minutes.'
    ]
  },
  {
    id: 7,
    title: 'Riz Cantonais',
    ingredients: [
      { id: 'rice', amount: 200 },
      { id: 'egg', amount: 2 },
      { id: 'ham', amount: 100 },
      { id: 'corn', amount: 50 },
      { id: 'soy_sauce', amount: 2 }
    ],
    time: '20 min',
    difficulty: 'Facile',
    category: 'Pâtes & Riz',
    image: 'https://images.unsplash.com/photo-1603138500281-6a1c84e8c11c?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites cuire le riz la veille (riz froid).',
      'Battre les œufs et faites une omelette fine, coupez en lanières.',
      'Sauté le jambon et le maïs.',
      'Ajoutez le riz, mélangez, terminez par la sauce soja.'
    ]
  },
  {
    id: 8,
    title: 'Nouilles Sautées aux Crevettes',
    ingredients: [
      { id: 'noodles', amount: 200 },
      { id: 'shrimp', amount: 200 },
      { id: 'onion', amount: 1 },
      { id: 'garlic', amount: 2 },
      { id: 'soy_sauce', amount: 3 },
      { id: 'oil', amount: 2 }
    ],
    time: '25 min',
    difficulty: 'Moyen',
    category: 'Pâtes & Riz',
    image: 'https://images.unsplash.com/photo-1569718212165-3a827c2529b9?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites cuire les nouilles.',
      'Faites sauter les crevettes avec ail et oignon.',
      'Ajoutez les nouilles et la sauce soja.',
      'Mélangez bien et servez chaud.'
    ]
  },

  // === VIANDES ===
  {
    id: 9,
    title: 'Poulet Rôti aux Pommes de Terre',
    ingredients: [
      { id: 'chicken', amount: 500 },
      { id: 'potato', amount: 4 },
      { id: 'onion', amount: 1 },
      { id: 'oil', amount: 3 }
    ],
    time: '1h 15min',
    difficulty: 'Moyen',
    category: 'Viandes',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Préchauffez le four à 200°C.',
      'Coupez les pommes de terre et l\’oignon.',
      'Placez le poulet et les légumes dans un plat.',
      'Arrosez d\’huile et enfournez.'
    ]
  },
  {
    id: 10,
    title: 'Émincé de Bœuf aux Oignons',
    ingredients: [
      { id: 'beef', amount: 400 },
      { id: 'onion', amount: 2 },
      { id: 'garlic', amount: 2 },
      { id: 'oil', amount: 2 },
      { id: 'soy_sauce', amount: 3 }
    ],
    time: '20 min',
    difficulty: 'Facile',
    category: 'Viandes',
    image: 'https://images.unsplash.com/photo-1606755962776-d9adbb5cd5c8?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Coupez le bœuf en lanières fines.',
      'Faites sauter les oignons et l\’ail dans l\’huile chaude.',
      'Ajoutez le bœuf et faites-le dorer.',
      'Terminez par la sauce soja et servez.'
    ]
  },
  {
    id: 11,
    title: 'Poulet au Curry Express',
    ingredients: [
      { id: 'chicken', amount: 400 },
      { id: 'onion', amount: 1 },
      { id: 'garlic', amount: 2 },
      { id: 'cream', amount: 100 },
      { id: 'oil', amount: 2 }
    ],
    time: '25 min',
    difficulty: 'Moyen',
    category: 'Viandes',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c05de8e4b?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Coupez le poulet en morceaux.',
      'Faites revenir oignon et ail hachés.',
      'Ajoutez le poulet et faites dorer.',
      'Versez la crème, laissez mijoter 10 min.'
    ]
  },
  {
    id: 12,
    title: 'Saucisses aux Lentilles',
    ingredients: [
      { id: 'sausage', amount: 4 },
      { id: 'lentils', amount: 200 },
      { id: 'onion', amount: 1 },
      { id: 'carrot', amount: 2 },
      { id: 'garlic', amount: 2 }
    ],
    time: '45 min',
    difficulty: 'Facile',
    category: 'Viandes',
    image: 'https://images.unsplash.com/photo-1607330289144-5b6f7c2c6e0a?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites tremper les lentilles 30 min.',
      'Faites revenir oignon, ail et carottes en dés.',
      'Ajoutez les lentilles et couvrez d\’eau.',
      'Ajoutez les saucisses et laissez mijoter 30 min.'
    ]
  },

  // === POISSONS ===
  {
    id: 13,
    title: 'Poisson au Four et Légumes',
    ingredients: [
      { id: 'fish', amount: 400 },
      { id: 'tomato', amount: 2 },
      { id: 'onion', amount: 1 },
      { id: 'garlic', amount: 2 },
      { id: 'oil', amount: 2 }
    ],
    time: '30 min',
    difficulty: 'Facile',
    category: 'Poissons',
    image: 'https://images.unsplash.com/photo-1485924354921-16c0da3a4f4b?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Préchauffez le four à 180°C.',
      'Disposez le poisson dans un plat.',
      'Ajoutez les tomates, l\’oignon et l\’ail émincés.',
      'Arrosez d\’huile et enfournez 20 min.'
    ]
  },
  {
    id: 14,
    title: 'Crevettes à l\'Ail',
    ingredients: [
      { id: 'shrimp', amount: 300 },
      { id: 'garlic', amount: 4 },
      { id: 'oil', amount: 3 },
      { id: 'lemon', amount: 1 }
    ],
    time: '15 min',
    difficulty: 'Très Facile',
    category: 'Poissons',
    image: 'https://images.unsplash.com/photo-1633500907079-11f2c6e9a9b9?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites chauffer l\’huile avec l\’ail haché.',
      'Ajoutez les crevettes et faites-les sauter 5 min.',
      'Pressez le citron par-dessus.',
      'Servez immédiatement avec du pain.'
    ]
  },

  // === VÉGÉTARIEN ===
  {
    id: 15,
    title: 'Gratin Dauphinois Rapide',
    ingredients: [
      { id: 'potato', amount: 6 },
      { id: 'milk', amount: 500 },
      { id: 'garlic', amount: 2 },
      { id: 'cheese', amount: 100 }
    ],
    time: '45 min',
    difficulty: 'Facile',
    category: 'Végétarien',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Émincez les pommes de terre.',
      'Mélangez le lait et l\’ail écrasé.',
      'Disposez dans un plat, ajoutez le fromage.',
      'Faites cuire au four jusqu\’à ce que ce soit doré.'
    ]
  },
  {
    id: 16,
    title: 'Ratatouille Express',
    ingredients: [
      { id: 'tomato', amount: 4 },
      { id: 'zucchini', amount: 2 },
      { id: 'eggplant', amount: 1 },
      { id: 'onion', amount: 1 },
      { id: 'garlic', amount: 2 },
      { id: 'oil', amount: 3 }
    ],
    time: '40 min',
    difficulty: 'Moyen',
    category: 'Végétarien',
    image: 'https://images.unsplash.com/photo-1572441710117-967039e9a4d7?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Coupez tous les légumes en dés.',
      'Faites revenir l\’oignon et l\’ail.',
      'Ajoutez les autres légumes par ordre de cuisson.',
      'Laissez mijoter 30 min à feu doux.'
    ]
  },
  {
    id: 17,
    title: 'Tofu Sauté aux Légumes',
    ingredients: [
      { id: 'tofu', amount: 300 },
      { id: 'pepper', amount: 2 },
      { id: 'onion', amount: 1 },
      { id: 'soy_sauce', amount: 3 },
      { id: 'oil', amount: 2 }
    ],
    time: '20 min',
    difficulty: 'Facile',
    category: 'Végétarien',
    image: 'https://images.unsplash.com/photo-1606755962776-d9adbb5cd5c8?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Coupez le tofu en cubes et essorez-le.',
      'Faites-le dorer à la poêle avec l\’huile.',
      'Ajoutez les légumes émincés.',
      'Terminez par la sauce soja.'
    ]
  },
  {
    id: 18,
    title: 'Salade Complète',
    ingredients: [
      { id: 'salad', amount: 1 },
      { id: 'tomato', amount: 2 },
      { id: 'egg', amount: 2 },
      { id: 'cheese', amount: 50 },
      { id: 'oil', amount: 2 }
    ],
    time: '15 min',
    difficulty: 'Très Facile',
    category: 'Végétarien',
    image: 'https://images.unsplash.com/photo-1546069451-e91f2faad2a5?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Lavez et essorez la salade.',
      'Faites cuire les œufs durs 9 min.',
      'Coupez les tomates et le fromage.',
      'Assemblez le tout avec l\’huile d\’assaisonnement.'
    ]
  },

  // === SANDWICHS & TARTINES ===
  {
    id: 19,
    title: 'Croque-Monsieur Express',
    ingredients: [
      { id: 'bread', amount: 2 },
      { id: 'ham', amount: 2 },
      { id: 'cheese', amount: 50 },
      { id: 'butter', amount: 10 }
    ],
    time: '10 min',
    difficulty: 'Très Facile',
    category: 'Sandwichs',
    image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Beurrez les tranches de pain.',
      'Posez le jambon et le fromage.',
      'Refermez et faites dorer à la poêle ou au four.'
    ]
  },
  {
    id: 20,
    title: 'Tartine Avocat-Tomate',
    ingredients: [
      { id: 'bread', amount: 2 },
      { id: 'avocado', amount: 1 },
      { id: 'tomato', amount: 1 },
      { id: 'lemon', amount: 0.5 }
    ],
    time: '5 min',
    difficulty: 'Très Facile',
    category: 'Sandwichs',
    image: 'https://images.unsplash.com/photo-1525351484163-7532a4e1a9b8?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Toastez le pain.',
      'Écrasez l\’avocat avec un filet de citron.',
      'Tartinez sur le pain.',
      'Ajoutez les tomates tranchées.'
    ]
  },

  // === SOUPES ===
  {
    id: 21,
    title: 'Soupe de Légumes Maison',
    ingredients: [
      { id: 'potato', amount: 3 },
      { id: 'carrot', amount: 3 },
      { id: 'onion', amount: 1 },
      { id: 'broccoli', amount: 1 },
      { id: 'garlic', amount: 2 }
    ],
    time: '30 min',
    difficulty: 'Très Facile',
    category: 'Soupes',
    image: 'https://images.unsplash.com/photo-1547592180-85f1736e8b78?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Coupez tous les légumes en morceaux.',
      'Faites-les revenir 5 min dans une casserole.',
      'Couvrez d\’eau et laissez cuire 20 min.',
      'Mixez la soupe, salez et poivrez.'
    ]
  },
  {
    id: 22,
    title: 'Velouté de Courgettes',
    ingredients: [
      { id: 'zucchini', amount: 4 },
      { id: 'onion', amount: 1 },
      { id: 'garlic', amount: 2 },
      { id: 'cream', amount: 100 },
      { id: 'oil', amount: 1 }
    ],
    time: '25 min',
    difficulty: 'Facile',
    category: 'Soupes',
    image: 'https://images.unsplash.com/photo-1604908176488-2c1d0f6f3a3f?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Émincez courgettes, oignon et ail.',
      'Faites revenir 5 min dans l\’huile.',
      'Couvrez d\’eau et cuisez 15 min.',
      'Mixez avec la crème fraîche.'
    ]
  },

  // === PLATS COMPLETS ===
  {
    id: 23,
    title: 'Couscous Rapide',
    ingredients: [
      { id: 'couscous', amount: 200 },
      { id: 'chicken', amount: 300 },
      { id: 'carrot', amount: 2 },
      { id: 'onion', amount: 1 },
      { id: 'tomato', amount: 2 }
    ],
    time: '40 min',
    difficulty: 'Moyen',
    category: 'Plats complets',
    image: 'https://images.unsplash.com/photo-1540293368-c8e5c1e9b6c8?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites dorer le poulet en morceaux.',
      'Ajoutez oignon, carottes et tomates coupés.',
      'Couvrez d\’eau et laissez mijoter 25 min.',
      'Préparez le couscous séparément, servez ensemble.'
    ]
  },
  {
    id: 24,
    title: 'Chili Con Carne Express',
    ingredients: [
      { id: 'beef', amount: 400 },
      { id: 'onion', amount: 1 },
      { id: 'garlic', amount: 2 },
      { id: 'tomato', amount: 3 },
      { id: 'corn', amount: 100 }
    ],
    time: '35 min',
    difficulty: 'Facile',
    category: 'Plats complets',
    image: 'https://images.unsplash.com/photo-1543275isk8905-1e6f4d1c6e0a?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites revenir le bœuf haché.',
      'Ajoutez oignon et ail hachés.',
      'Incorporez tomates et maïs.',
      'Laissez mijoter 20 min à feu doux.'
    ]
  },
  {
    id: 25,
    title: 'Poulet Basquaise',
    ingredients: [
      { id: 'chicken', amount: 500 },
      { id: 'pepper', amount: 2 },
      { id: 'onion', amount: 1 },
      { id: 'tomato', amount: 3 },
      { id: 'garlic', amount: 2 }
    ],
    time: '45 min',
    difficulty: 'Moyen',
    category: 'Plats complets',
    image: 'https://images.unsplash.com/photo-1604908554008-9b7d6e6e1c4a?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites dorer le poulet en morceaux.',
      'Ajoutez oignon et ail hachés.',
      'Incorporez poivrons et tomates en lanières.',
      'Laissez mijoter 30 min à couvert.'
    ]
  },

  // === DESSERTS ===
  {
    id: 26,
    title: 'Crêpes Sucrées',
    ingredients: [
      { id: 'flour', amount: 250 },
      { id: 'egg', amount: 3 },
      { id: 'milk', amount: 500 },
      { id: 'butter', amount: 30 },
      { id: 'sugar', amount: 30 }
    ],
    time: '25 min',
    difficulty: 'Facile',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1517242587893-54f6f6945737?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Mélangez farine, œufs et sucre.',
      'Ajoutez le lait progressivement pour éviter les grumeaux.',
      'Faites fondre le beurre et ajoutez-le.',
      'Faites cuire les crêpes dans une poêle chaude.'
    ]
  },
  {
    id: 27,
    title: 'Yaourt Maison aux Fruits',
    ingredients: [
      { id: 'yogurt', amount: 4 },
      { id: 'banana', amount: 1 },
      { id: 'honey', amount: 2 }
    ],
    time: '5 min',
    difficulty: 'Très Facile',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1488477304112-49b4881f4d7a?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Versez les yaourts dans des coupelles.',
      'Coupez la banane en rondelles.',
      'Disposez sur les yaourts.',
      'Nappez de miel.'
    ]
  },
  {
    id: 28,
    title: 'Tarte aux Pommes Express',
    ingredients: [
      { id: 'apple', amount: 4 },
      { id: 'flour', amount: 200 },
      { id: 'butter', amount: 100 },
      { id: 'sugar', amount: 80 }
    ],
    time: '50 min',
    difficulty: 'Moyen',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1568571780246-016db2c2e1d9?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Préparez une pâte avec farine, beurre et un peu d\’eau.',
      'Foncez un moule, piquez la pâte.',
      'Épluchez et coupez les pommes en lamelles.',
      'Disposez sur la pâte, saupoudrez de sucre et enfournez 35 min à 180°C.'
    ]
  },

  // === ACCOMPAGNEMENTS ===
  {
    id: 29,
    title: 'Pommes de Terre Rôties',
    ingredients: [
      { id: 'potato', amount: 6 },
      { id: 'oil', amount: 3 },
      { id: 'garlic', amount: 2 }
    ],
    time: '40 min',
    difficulty: 'Très Facile',
    category: 'Accompagnements',
    image: 'https://images.unsplash.com/photo-1599043524166-94d5f5dba4dd?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Coupez les pommes de terre en quartiers.',
      'Mélangez avec l\’huile et l\’ail écrasé.',
      'Étalez sur une plaque au four.',
      'Enfournez 35 min à 200°C.'
    ]
  },
  {
    id: 30,
    title: 'Beignets de Courgettes',
    ingredients: [
      { id: 'zucchini', amount: 2 },
      { id: 'flour', amount: 100 },
      { id: 'egg', amount: 2 },
      { id: 'oil', amount: 3 }
    ],
    time: '20 min',
    difficulty: 'Facile',
    category: 'Accompagnements',
    image: 'https://images.unsplash.com/photo-1543273239259-1b2e2c2c2c2a?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Râpez les courgettes et essorez-les.',
      'Mélangez avec farine et œufs.',
      'Faites chauffer l\’huile dans une poêle.',
      'Déposez des petits tas et faites dorer des deux côtés.'
    ]
  },

  // === PLATS RAPIDES ===
  {
    id: 31,
    title: 'Œufs au Plat et Jambon',
    ingredients: [
      { id: 'egg', amount: 2 },
      { id: 'ham', amount: 2 },
      { id: 'oil', amount: 1 }
    ],
    time: '10 min',
    difficulty: 'Très Facile',
    category: 'Plats rapides',
    image: 'https://images.unsplash.com/photo-1607613429388-58b9e0a4f1f9?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites chauffer l\’huile dans une poêle.',
      'Faites dorer le jambon 1 min de chaque côté.',
      'Cassez les œufs par-dessus.',
      'Laissez cuire jusqu\’à ce que les blancs soient pris.'
    ]
  },
  {
    id: 32,
    title: 'Pâtes au Fromage (Mac and Cheese)',
    ingredients: [
      { id: 'pasta', amount: 200 },
      { id: 'cheese', amount: 100 },
      { id: 'milk', amount: 200 },
      { id: 'butter', amount: 30 }
    ],
    time: '20 min',
    difficulty: 'Très Facile',
    category: 'Plats rapides',
    image: 'https://images.unsplash.com/photo-1633939360448-6c4a6c2c2c2a?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites cuire les pâtes.',
      'Dans une casserole, faites fondre le beurre.',
      'Ajoutez le lait et le fromage râpé, mélangez jusqu\’à ce que ce soit fondu.',
      'Mélangez avec les pâtes égouttées.'
    ]
  }
];
