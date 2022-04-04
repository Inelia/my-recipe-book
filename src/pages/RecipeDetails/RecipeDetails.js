import React from 'react'
import Recipes from '../../components/Recipes/Recipes';
import data from "../../data"

function RecipeDetails() {
      const populateRecipes = data.recipes.map((iteration) => {
    return <Recipes key={iteration.title}{ ...iteration} />
  });

  return (
    <main className='recipe'>
        {populateRecipes}
    </main>
  )
}
export default RecipeDetails