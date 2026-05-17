import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChefHat, Clock, Flame, X, Check, UtensilsCrossed, HelpCircle } from 'lucide-react';
import { ingredients, recipes } from './data/recipes';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState({}); // { tomato: 3, ham: 1 }
  const [matchingRecipes, setMatchingRecipes] = useState(recipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [magicRecipe, setMagicRecipe] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [displayUnits, setDisplayUnits] = useState({});
  const [customIngredients, setCustomIngredients] = useState(() => {
    const saved = localStorage.getItem('customIngredients');
    return saved ? JSON.parse(saved) : [];
  });

  const allIngredients = [...ingredients, ...customIngredients];

  useEffect(() => {
    localStorage.setItem('customIngredients', JSON.stringify(customIngredients));
  }, [customIngredients]);

  const toggleIngredient = (id) => {
    setSelectedIngredients(prev => {
      const newIngredients = { ...prev };
      if (newIngredients[id] !== undefined) {
        delete newIngredients[id];
      } else {
        newIngredients[id] = 1;
      }
      return newIngredients;
    });
  };

  const updateQuantity = (id, delta, multiplier = 1) => {
    setSelectedIngredients(prev => {
      const current = prev[id] === '' ? 0 : (prev[id] || 0);
      const newVal = Math.max(0, current + (delta * multiplier));
      const newIngredients = { ...prev };
      if (newVal === 0) {
        delete newIngredients[id];
      } else {
        newIngredients[id] = newVal;
      }
      return newIngredients;
    });
  };

  const handleQuantityChange = (id, value, multiplier = 1) => {
    setSelectedIngredients(prev => {
      const newIngredients = { ...prev };
      if (value === '') {
        newIngredients[id] = '';
      } else {
        const num = parseFloat(value);
        if (!isNaN(num) && num >= 0) {
          newIngredients[id] = num * multiplier;
        }
      }
      return newIngredients;
    });
  };

  const handleQuantityBlur = (id) => {
    setSelectedIngredients(prev => {
      const newIngredients = { ...prev };
      if (newIngredients[id] === '' || newIngredients[id] === 0) {
        delete newIngredients[id];
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

  const generateMagicRecipe = () => {
    const selectedIds = Object.keys(selectedIngredients);
    if (selectedIds.length < 2) {
      alert("Veuillez sélectionner au moins 2 ingrédients pour la magie du Chef !");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation time
    setTimeout(() => {
      // Mélange aléatoire pour que le plat principal change à chaque fois
      const shuffledIds = [...selectedIds].sort(() => 0.5 - Math.random());
      
      let chosenIds = shuffledIds;
      // S'il y a plus de 3 ingrédients, 60% de chance de n'en prendre qu'une partie (pour éviter le gloubiboulga)
      if (selectedIds.length > 3 && Math.random() > 0.4) {
        // Choisit entre 2 et 5 ingrédients au hasard
        const maxLimit = Math.min(selectedIds.length - 1, 5);
        const numToPick = Math.floor(Math.random() * (maxLimit - 2 + 1)) + 2; 
        chosenIds = shuffledIds.slice(0, numToPick);
      }

      const selectedNames = chosenIds.map(id => allIngredients.find(ing => ing.id === id)?.name || 'Ingrédient mystère');
      const mainIng = selectedNames[0];
      const secondIng = selectedNames[1] || selectedNames[0]; // Sécurité au cas où il n'y aurait qu'un ingrédient
      
      const recipeTypes = [
        {
          title: `La Poêlée improvisée de ${mainIng} et ${secondIng}`,
          instructions: [
            `Lavez et découpez soigneusement : ${selectedNames.join(', ')}.`,
            `Faites chauffer une grande poêle avec un peu de matière grasse.`,
            `Saisissez ${mainIng} à feu vif pendant quelques minutes.`,
            `Incorporez le reste de vos ingrédients (${selectedNames.length > 2 ? 'légumes, etc.' : secondIng}) et baissez le feu.`,
            `Laissez dorer en remuant régulièrement. Assaisonnez et servez bien chaud !`
          ]
        },
        {
          title: `Le Délice de ${mainIng} façon Chef`,
          instructions: [
            `Rassemblez sur votre plan de travail : ${selectedNames.join(', ')}.`,
            `Préparez ${mainIng} pour qu'il soit la star de votre plat.`,
            `Dans une cocotte ou une sauteuse, faites revenir doucement l'ensemble des ingrédients.`,
            `Laissez mijoter à feu doux en couvrant pour conserver tout le moelleux.`,
            `Dressez joliment dans vos plus belles assiettes. Bon appétit !`
          ]
        },
        {
          title: `Gratin surprise : ${mainIng} & ${secondIng}`,
          instructions: [
            `Préchauffez votre four à 180°C (thermostat 6).`,
            `Coupez ${mainIng} et ${secondIng} en tranches ou en petits dés.`,
            `Disposez harmonieusement ${selectedNames.join(', ')} dans un plat à gratin.`,
            `Nappez d'un fond de crème, de sauce ou simplement d'un filet d'huile.`,
            `Enfournez pour 25 à 30 minutes jusqu'à obtenir une belle coloration !`
          ]
        },
        {
          title: `Mélange Magique de Saisons`,
          instructions: [
            `Triez et préparez vos ingrédients : ${selectedNames.join(', ')}.`,
            `Dans un grand récipient, commencez par associer ${mainIng} et ${secondIng}.`,
            `Ajoutez le reste des ingrédients pour créer un équilibre de saveurs et de textures.`,
            `Préparez un petit assaisonnement de votre choix pour lier le tout.`,
            `Mélangez bien, laissez reposer quelques minutes pour que les goûts se diffusent, et dégustez !`
          ]
        }
      ];

      const selectedType = recipeTypes[Math.floor(Math.random() * recipeTypes.length)];

      const magic = {
        id: 'magic-' + Date.now(),
        title: selectedType.title,
        ingredients: chosenIds.map(id => ({ id, amount: selectedIngredients[id] })),
        time: '25 min',
        difficulty: 'Magique',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
        instructions: selectedType.instructions,
        isMagic: true
      };

      setMagicRecipe(magic);
      setIsGenerating(false);
      setSelectedRecipe(magic);
    }, 2000);
  };

  const addCustomIngredient = () => {
    if (!searchQuery.trim()) return;
    
    const emojiMap = {
      'courgette': '🥒', 'poivron': '🫑', 'broccoli': '🥦', 'maïs': '🌽',
      'champignon': '🍄', 'aubergine': '🍆', 'avocat': '🥑', 'piment': '🌶️',
      'concombre': '🥒', 'salade': '🥗', 'fraise': '🍓', 'pomme': '🍎',
      'poire': '🍐', 'banane': '🍌', 'citron': '🍋', 'orange': '🍊'
    };

    const name = searchQuery.trim().toLowerCase();
    const newId = name.replace(/\s+/g, '-');
    if (allIngredients.find(ing => ing.id === newId)) {
      alert("Cet ingrédient existe déjà !");
      return;
    }

    const newIng = {
      id: newId,
      name: searchQuery.trim(),
      icon: emojiMap[name] || '📦',
      category: 'Divers',
      unit: 'pce'
    };

    setCustomIngredients(prev => [...prev, newIng]);
    toggleIngredient(newId);
    setSearchQuery('');
  };

  const removeCustomIngredient = (e, id) => {
    e.stopPropagation();
    setCustomIngredients(prev => prev.filter(ing => ing.id !== id));
    setSelectedIngredients(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const filteredIngredients = allIngredients.filter(ing => 
    ing.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <header>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <button 
            onClick={() => setShowHelp(true)}
            style={{ 
              position: 'absolute', top: '-2rem', right: '1rem', 
              background: 'rgba(255,255,255,0.2)', border: 'none', 
              borderRadius: '50%', width: '40px', height: '40px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'white', backdropFilter: 'blur(5px)'
            }}
            title="Mode d'emploi"
          >
            <HelpCircle size={24} />
          </button>
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
                  className={`ingredient-card glass ${selectedIngredients[ing.id] !== undefined ? 'selected' : ''}`}
                  onClick={() => toggleIngredient(ing.id)}
                  style={{ position: 'relative' }}
                >
                  {customIngredients.find(ci => ci.id === ing.id) && (
                    <button 
                      onClick={(e) => removeCustomIngredient(e, ing.id)}
                      style={{ 
                        position: 'absolute', top: '5px', right: '5px', 
                        background: 'rgba(0,0,0,0.1)', border: 'none', 
                        borderRadius: '50%', width: '20px', height: '20px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '10px', cursor: 'pointer', color: 'white'
                      }}
                    >
                      <X size={12} />
                    </button>
                  )}
                  <span style={{ fontWeight: 600, display: 'block', fontSize: '1.1rem', margin: '0.5rem 0' }}>{ing.name}</span>

                  {selectedIngredients[ing.id] !== undefined && (() => {
                    const baseUnit = ing.unit;
                    const currentDisplayUnit = displayUnits[ing.id] || baseUnit;
                    const multiplier = (currentDisplayUnit === 'kg' || currentDisplayUnit === 'L') ? 1000 : 1;
                    const displayValue = selectedIngredients[ing.id] === '' 
                      ? '' 
                      : (selectedIngredients[ing.id] / multiplier);

                    return (
                      <div className="quantity-controls fade-in" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => updateQuantity(ing.id, -1, multiplier)}>-</button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <input 
                            type="number"
                            min="0"
                            step="any"
                            value={displayValue}
                            onChange={(e) => handleQuantityChange(ing.id, e.target.value, multiplier)}
                            onBlur={() => handleQuantityBlur(ing.id)}
                            className="quantity-input"
                          />
                          {(baseUnit === 'g' || baseUnit === 'ml') ? (
                            <select
                              value={currentDisplayUnit}
                              onChange={(e) => {
                                setDisplayUnits(prev => ({ ...prev, [ing.id]: e.target.value }));
                              }}
                              className="unit-select"
                            >
                              {baseUnit === 'g' ? (
                                <>
                                  <option value="g">g</option>
                                  <option value="kg">kg</option>
                                </>
                              ) : (
                                <>
                                  <option value="ml">ml</option>
                                  <option value="L">L</option>
                                </>
                              )}
                            </select>
                          ) : (
                            <span style={{ minWidth: 'auto' }}>{baseUnit}</span>
                          )}
                        </div>
                        <button onClick={() => updateQuantity(ing.id, 1, multiplier)}>+</button>
                      </div>
                    );
                  })()}
                </motion.div>
              ))}

              {filteredIngredients.length === 0 && searchQuery && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ingredient-card glass"
                  style={{ border: '2px dashed var(--primary)', background: 'rgba(255, 107, 53, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onClick={addCustomIngredient}
                >
                  <span style={{ fontWeight: 600, display: 'block', textAlign: 'center' }}>Ajouter "{searchQuery}"</span>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        <section className="recipes-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2>Recettes suggérées ({matchingRecipes.length})</h2>
            <div style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ChefHat /> {Object.keys(selectedIngredients).length} ingrédients
              </div>
              {Object.keys(selectedIngredients).length >= 2 && (
                <button 
                  className="btn btn-primary" 
                  onClick={generateMagicRecipe}
                  disabled={isGenerating}
                  style={{ 
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
                    fontSize: '0.8rem',
                    padding: '0.5rem 1rem'
                  }}
                >
                  {isGenerating ? 'Magie en cours...' : '🪄 Magie du Chef'}
                </button>
              )}
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

                {selectedRecipe.isMagic && (
                  <div style={{ marginTop: '2rem', padding: '1rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))', borderRadius: '15px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                    <p style={{ fontStyle: 'italic', color: '#6366f1' }}>✨ Cette recette a été générée spécialement pour vous avec vos ingrédients !</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHelp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setShowHelp(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-content"
              onClick={e => e.stopPropagation()}
              style={{ padding: '3rem', maxWidth: '600px' }}
            >
              <button className="close-btn" onClick={() => setShowHelp(false)}>
                <X size={20} />
              </button>
              
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📖</div>
                <h2>Mode d'Emploi</h2>
              </div>

              <div className="help-steps" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                  <div>
                    <strong style={{ display: 'block' }}>Remplissez votre frigo</strong>
                    <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Sélectionnez les ingrédients que vous avez en cliquant sur les cartes. Vous pouvez aussi rechercher un ingrédient spécifique.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                  <div>
                    <strong style={{ display: 'block' }}>Ajustez les quantités</strong>
                    <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Utilisez les boutons + et - sur chaque ingrédient pour indiquer combien vous en avez.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
                  <div>
                    <strong style={{ display: 'block' }}>Ajoutez vos propres ingrédients</strong>
                    <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Si un ingrédient manque, tapez son nom dans la recherche et cliquez sur "Ajouter". L'appli reconnaîtra même certains emojis !</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</div>
                  <div>
                    <strong style={{ display: 'block' }}>La Magie du Chef</strong>
                    <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Si les recettes suggérées ne vous conviennent pas, cliquez sur le bouton violet <strong>🪄 Magie du Chef</strong> pour générer une recette sur mesure !</p>
                  </div>
                </div>
              </div>

              <button 
                className="btn btn-primary" 
                onClick={() => setShowHelp(false)}
                style={{ width: '100%', marginTop: '2rem' }}
              >
                C'est compris !
              </button>
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
