import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';
import { IRecipe } from './recipeTypes';


const App = () => {
  const [recipes, setRecipes] = React.useState<IRecipe[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [view, setView] = useState<'tags' | 'recipes'>('tags');

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch('https://dummyjson.com/recipes/tags');
      const data = await response.json();
      setTags(data);
    };
    fetchTags();
  }, []);
  
  useEffect(() => {
    if (selectedTag) {
        const fetchRecipes = async () => {
            const response = await fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`);
            const data = await response.json();
            console.log("Fetched recipes:", data.recipes); 
            setRecipes(data.recipes);
        };
        fetchRecipes();
    }
}, [selectedTag]);


  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
    setView('recipes');

  };

  const handleBackToTags = () => {
    setView('tags');
    setSelectedTag(null);
  };

  return (
    <div>
       <h1>ACME Recipe O'Master</h1>
      {view === 'tags' ? (
        <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
      ) : (
        <RecipeList recipes={recipes} onBack={handleBackToTags} />
      )}
    </div>
  );
};

export default App;
