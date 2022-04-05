import React from 'react'
import	'./Recipes.css'

function Recipes(props) {
let ingredients = props.ingredients;
let list = [];
ingredients.forEach(ingredient => {
      list.push(<p class="recipe__ingredient">{ingredient}</p>);
  });
  let instruct = props.instructions;
  const instruction = [];
  let count =0;
  instruct.forEach(i =>{
    ++count
    instruction.push(<p className='recipe__instruction'><i className=''>{count}.</i> {i}</p>);
  })
  return (
    <article className='recipe__details'>
      <h3 className='recipe__title'>{props.title}</h3>
      <img src={props.img} alt={props.title} className="recipe__img" />
      <section className='recipe__info'>
        <section className='recipe__timePrep'>
        <p><i class="fa-solid fa-clock"></i>{props.prepTemp} + {props.cookingTemp}</p>
        </section>
        <section className='recipe__difficulty'>
          <p><i class="fa-solid fa-spoon"></i>{props.level}</p>
        </section>
        <section className='recipe__stars'>          
          <p><i class="fas fa-star"></i>{props.stars}</p>
        </section>
        
      </section>
      <div className='hr'/>
      <section>
        <article className="recipe__list">
          {list}
        </article>
        <div className='hr'/>
        <article>
          {instruction}
        </article>
      </section>
    </article>
  )
}

export default Recipes