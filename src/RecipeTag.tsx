import React from 'react';

interface IRecipeTagProps {
  tagName: string;
  onSelectTag: (tagName: string) => void;
}

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
  return (
    <div
      onClick={() => onSelectTag(tagName)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelectTag(tagName);
        }
      }}
    >
      {tagName}
    </div>
  );
};


export default RecipeTag;
