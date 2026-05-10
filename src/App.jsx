import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChefHat, Clock, Flame, X, Check, UtensilsCrossed } from 'lucide-react';
import { ingredients, recipes } from './data/recipes';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState({}); // { tomato: 3, ham: 1 }
  const [matchingRecipes, setMatchingRecipes] = useState(recipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleIngredient = (id) => {
    setSelectedIngredients(prev => {
      const newIngredients = { ...prev };
      if (newIngredients[id]) {
        delete newIngredients[id];
      } else {
        newIngredients[id] = 1;
      }
      return newIngredients;
    });
  };

  const updateQuantity = (id, delta) => {
    setSelectedIngredients(prev => {
      const current = prev[id] || 0;
      const newVal = Math.max(0, current + delta);
      const newIngredients = { ...prev };
      if (newVal === 0) {
        delete newIngredients[id];
      } else {
        newIngredients[id] = newVal;
      }
      return newIngredients;
    });
  };

  useEffect(() => {
    const selectedIds = Object.keys(selectedIngredients);
    if (selectedIds.length === 0) {
      setMatchingRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe => 
        recipe.ingredients.some(ri => selectedIds.includes(ri.id))
      ).map(recipe => {
        // Calculate match score based on presence and quantity
        const matches = recipe.ingredients.filter(ri => selectedIds.includes(ri.id));
        const hasEnough = matches.every(ri => selectedIngredients[ri.id] >= ri.amount);
        return { ...recipe, matchScore: matches.length, hasEnough };
      }).sort((a, b) => b.matchScore - a.matchScore);
      setMatchingRecipes(filtered);
    }
  }, [selectedIngredients]);

  const filteredIngredients = ingredients.filter(ing => 
    ing.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <header>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/logo.png" alt="Logo" style={{ width: '120px', height: '120px', marginBottom: '1rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
          <h1>On Mange Quoi Ce Soir</h1>
          <p>Découvrez des recettes magiques avec ce que vous avez au frigo</p>
        </motion.div>
      </header>

      <main className="container">
        <section className="search-section">
          <div className="glass" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} size={20} />
                <input 
                  type="text" 
                  placeholder="Rechercher un ingrédient..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3rem',
                    borderRadius: '30px',
                    border: 'none',
                    background: 'var(--bg)',
                    fontSize: '1rem',
                    outline: 'none',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
                  }}
                />
              </div>
              {Object.keys(selectedIngredients).length > 0 && (
                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedIngredients({})}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <X size={16} /> Effacer
                </button>
              )}
            </div>

            <div className="ingredient-grid">
              {filteredIngredients.map((ing) => (
                <motion.div
                  key={ing.id}
                  whileHover={{ scale: 1.02 }}
                  className={`ingredient-card glass ${selectedIngredients[ing.id] ? 'selected' : ''}`}
                  onClick={() => toggleIngredient(ing.id)}
                >
                  <span className="ingredient-icon">{ing.icon}</span>
                  <span style={{ fontWeight: 600, display: 'block' }}>{ing.name}</span>

                  {selectedIngredients[ing.id] && (
                    <div className="quantity-controls fade-in" onClick={(e) => e.stopPropagation()}>
                      <button onClick={() => updateQuantity(ing.id, -1)}>-</button>
                      <span>{selectedIngredients[ing.id]} {ing.unit}</span>
                      <button onClick={() => updateQuantity(ing.id, 1)}>+</button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="recipes-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2>Recettes suggérées ({matchingRecipes.length})</h2>
            <div style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ChefHat /> {Object.keys(selectedIngredients).length} types d'ingrédients
            </div>
          </div>

          {matchingRecipes.length > 0 ? (
            <div className="recipe-grid">
              <AnimatePresence>
                {matchingRecipes.map((recipe) => (
                  <motion.div
                    layout
                    key={recipe.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="recipe-card glass"
                    onClick={() => setSelectedRecipe(recipe)}
                  >
                    <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                    <div className="recipe-content">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <span className="recipe-tag">{recipe.difficulty}</span>
                        {recipe.hasEnough && (
                          <span style={{ background: '#22c55e', color: 'white', fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '10px', fontWeight: 'bold' }}>
                            STOCK OK
                          </span>
                        )}
                      </div>
                      <h3 style={{ margin: '0.5rem 0' }}>{recipe.title}</h3>
                      <div style={{ display: 'flex', gap: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Clock size={16} /> {recipe.time}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Flame size={16} /> {recipe.ingredients.length} ingr.
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem', opacity: 0.6 }}>
              <UtensilsCrossed size={48} style={{ marginBottom: '1rem' }} />
              <p>Aucune recette trouvée avec ces ingrédients. Essayez d'en ajouter d'autres !</p>
            </div>
          )}
        </section>
      </main>

      <AnimatePresence>
        {selectedRecipe && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedRecipe(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="modal-content"
              onClick={e => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedRecipe(null)}>
                <X size={20} />
              </button>
              <img 
                src={selectedRecipe.image} 
                alt={selectedRecipe.title} 
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{selectedRecipe.title}</h2>
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
                   <div>
                     <strong style={{ display: 'block', color: 'var(--primary)' }}>TEMPS</strong>
                     <span>{selectedRecipe.time}</span>
                   </div>
                   <div>
                     <strong style={{ display: 'block', color: 'var(--primary)' }}>DIFFICULTÉ</strong>
                     <span>{selectedRecipe.difficulty}</span>
                   </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{ marginBottom: '1rem' }}>Ingrédients</h4>
                    <ul style={{ listStyle: 'none' }}>
                      {selectedRecipe.ingredients.map(ri => {
                        const ing = ingredients.find(i => i.id === ri.id);
                        const hasEnough = selectedIngredients[ri.id] >= ri.amount;
                        return (
                          <li key={ri.id} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: hasEnough ? 'inherit' : '#94a3b8' }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: hasEnough ? '#22c55e' : '#cbd5e1' }}></div>
                            <span>{ri.amount} {ing?.unit} {ing?.name}</span>
                            {!hasEnough && selectedIngredients[ri.id] > 0 && (
                              <span style={{ fontSize: '0.7rem', color: '#ef4444' }}> (Manque {ri.amount - selectedIngredients[ri.id]})</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '1rem' }}>Instructions</h4>
                    <ol style={{ paddingLeft: '1.2rem' }}>
                      {selectedRecipe.instructions.map((step, idx) => (
                        <li key={idx} style={{ marginBottom: '1rem' }}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer style={{ textAlign: 'center', padding: '4rem 2rem', opacity: 0.6 }}>
        <p>© 2026 On Mange Quoi Ce Soir - Fait avec passion pour la cuisine</p>
      </footer>
    </div>
  );
}

export default App;
