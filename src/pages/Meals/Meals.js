import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import {useParams} from "react-router-dom"
import Home from '../Home/Home';
import Card from "../../components/Card/Card";
import data from "../../data"

function Meals() {
  const location = useLocation();
  const params = location.pathname.split('/')[2];
  switch (params){
    case 'starter':
      console.log(params);
      break;
    case 'main':
      console.log(params);
      break;
    case 'dessert':
      console.log(params);
      break;
      default:
        <Home />
  }

  const recipeByType = data.recipes.filter(recipes => recipes.type === params).map((iteration) => {
      if(iteration.type === params){
        return <Card key={iteration.title}{ ...iteration} />
      }
    });
        console.log(recipeByType);

  return (
    // console.log(recipeByType);
    <div>
      <h4>Plats du jours !</h4>
      {recipeByType}
    </div>
  )
}

export default Meals