import React from 'react';
import Recipe from './Recipe';
import { IRecipe } from './recipeTypes';

interface IRecipeListProps {
  recipes: IRecipe[] | null; 
  onBack: () => void;
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes, onBack }) => {
  if (!Array.isArray(recipes)) {
    return <><div>No recipes available.</div><button onClick={onBack}>Back </button></>;
    
  }
  return (
    <div>
      <button onClick={onBack}>Back </button>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipeData={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
