import React from 'react';
import RecipeTag from './RecipeTag';


interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
  }
  
const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
  return (
    <div >
      <h2>Choose a tag below</h2>
      <div >
        {tagList.map((tag) => (
          <div key={tag}>
            <RecipeTag tagName={tag} onSelectTag={onSelectTag} />
          </div>
        ))}
      </div>
    </div>
  );
};
  export default RecipeTagList;