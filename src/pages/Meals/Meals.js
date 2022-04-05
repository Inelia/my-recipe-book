import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import {useParams} from "react-router-dom"
import Home from '../Home/Home';
import Card from "../../components/Card/Card";
import data from "../../data"
import "./Meals.css"

function Meals() {
  const location = useLocation();
  const params = location.pathname.split('/')[2];
  // console.log(location.pathname.split('/')[2]);
  let mealType;
  switch (params){
    case 'starter':
      mealType='Entrées';
      break;
    case 'main':
      mealType='Plat';
      break;
    case 'dessert':
      mealType='Desserts';
      break;
      default:
        <Home />
  }

  const recipeByType = data.recipes.filter(recipes => recipes.type === params).map((iteration) => {
      if(iteration.type === params){
        return <Card key={iteration.title}{ ...iteration} />
      }
    });
        // console.log(recipeByType);

  return (
    // console.log(recipeByType);
    <main className='meal'>
      <h4>{mealType} du jours !</h4>
      <section className='meal__section'>
      {recipeByType}
      </section>
    </main>
  )
}

export default Meals