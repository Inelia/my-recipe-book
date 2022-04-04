import React from 'react'
import	'./Recipes.css'

function Recipes(props) {
  return (
    <article className='recipe__details'>
      <h3 className='recipe__title'>{props.title}</h3>
      <img src={props.img} alt={props.title} className="recipe__img" />
      <section className='recipe__info'>
      <section className='recipe__timePrep'>
        <i class="fa-solid fa-timer"></i>
      <p>{props.prepTemp} + {props.cookingTemp}</p>
      </section>
      <section className='recipe__difficulty'>
        <i class="fa-solid fa-hat-chef"></i>
        <p>{props.level}</p>
      </section>
      <section className='recipe__stars'>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <p>{props.stars}</p>
      </section>
      </section>
    </article>
  )
}

export default Recipes