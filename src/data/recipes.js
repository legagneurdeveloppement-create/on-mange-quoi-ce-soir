export const ingredients = [
  { id: 'tomato', name: 'Tomate', icon: '🍅', category: 'Légumes', unit: 'pce' },
  { id: 'potato', name: 'Pomme de terre', icon: '🥔', category: 'Légumes', unit: 'pce' },
  { id: 'carrot', name: 'Carotte', icon: '🥕', category: 'Légumes', unit: 'pce' },
  { id: 'onion', name: 'Oignon', icon: '🧅', category: 'Légumes', unit: 'pce' },
  { id: 'garlic', name: 'Ail', icon: '🧄', category: 'Légumes', unit: 'gousse' },
  { id: 'egg', name: 'Œuf', icon: '🥚', category: 'Protéines', unit: 'pce' },
  { id: 'chicken', name: 'Poulet', icon: '🍗', category: 'Protéines', unit: 'g' },
  { id: 'beef', name: 'Bœuf', icon: '🥩', category: 'Protéines', unit: 'g' },
  { id: 'ham', name: 'Jambon', icon: '🍖', category: 'Protéines', unit: 'tranche' },
  { id: 'pasta', name: 'Pâtes', icon: '🍝', category: 'Féculents', unit: 'g' },
  { id: 'rice', name: 'Riz', icon: '🍚', category: 'Féculents', unit: 'g' },
  { id: 'cheese', name: 'Fromage', icon: '🧀', category: 'Laitage', unit: 'g' },
  { id: 'milk', name: 'Lait', icon: '🥛', category: 'Laitage', unit: 'ml' },
  { id: 'butter', name: 'Beurre', icon: '🧈', category: 'Laitage', unit: 'g' },
  { id: 'flour', name: 'Farine', icon: '🌾', category: 'Épicerie', unit: 'g' },
  { id: 'oil', name: 'Huile', icon: '🫗', category: 'Épicerie', unit: 'cs' },
];

export const recipes = [
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
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites cuire les pâtes.',
      'Faites revenir l’oignon et l’ail dans l’huile.',
      'Ajoutez les tomates coupées et laissez mijoter.',
      'Mélangez avec les pâtes.'
    ]
  },
  {
    id: 3,
    title: 'Poulet Rôti aux Pommes de Terre',
    ingredients: [
      { id: 'chicken', amount: 500 },
      { id: 'potato', amount: 4 },
      { id: 'onion', amount: 1 },
      { id: 'oil', amount: 3 }
    ],
    time: '1h 15min',
    difficulty: 'Moyen',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Préchauffez le four à 200°C.',
      'Coupez les pommes de terre et l’oignon.',
      'Placez le poulet et les légumes dans un plat.',
      'Arrosez d’huile et enfournez.'
    ]
  },
  {
    id: 4,
    title: 'Gratin Dauphinois Rapide',
    ingredients: [
      { id: 'potato', amount: 6 },
      { id: 'milk', amount: 500 },
      { id: 'garlic', amount: 2 },
      { id: 'cheese', amount: 100 }
    ],
    time: '45 min',
    difficulty: 'Facile',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Émincez les pommes de terre.',
      'Mélangez le lait et l’ail écrasé.',
      'Disposez dans un plat, ajoutez le fromage.',
      'Faites cuire au four jusqu’à ce que ce soit doré.'
    ]
  },
  {
    id: 5,
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
    image: 'https://images.unsplash.com/photo-1512058560366-cd2429ff5c7c?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Faites cuire le riz.',
      'Santez les carottes et l’oignon hachés.',
      'Ajoutez le riz et mélangez bien.',
      'Saisissez à feu vif quelques minutes.'
    ]
  },
  {
    id: 6,
    title: 'Croque-Monsieur express',
    ingredients: [
      { id: 'ham', amount: 2 },
      { id: 'cheese', amount: 50 },
      { id: 'butter', amount: 10 }
    ],
    time: '10 min',
    difficulty: 'Très Facile',
    image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?auto=format&fit=crop&q=80&w=800',
    instructions: [
      'Beurrez les tranches de pain (non incluses dans la liste mais essentielles).',
      'Posez le jambon et le fromage.',
      'Faites dorer à la poêle ou au four.'
    ]
  }
];
