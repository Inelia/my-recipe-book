import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Recipes from '../../components/Recipes/Recipes';
import data from "../../data"
// import Home from '../Home/Home';

function RecipeDetails() {
    const location = useLocation();
  const params = location.pathname.split('/')[2];

  const recipeById = data.recipes.filter(recipes => recipes.id === params).map((iteration) => {
      if(iteration.id === params){
        return <Recipes key={iteration.id}{ ...iteration} />
      }
    });

    // let { id } = useParams<"id">();
    // if(!id){
    //     return <Home />
    // }
    // let recipe = getRecipeById(id);
    // if(!recipe){
    //     return <Home />;
    //         }

    // let 
  return (
    <main className='recipe'>
        {recipeById}
    </main>
  )
}
export default RecipeDetails