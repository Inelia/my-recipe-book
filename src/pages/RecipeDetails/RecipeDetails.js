import React from 'react'

function RecipeDetails(props) {
  return (
    <main className='recipe'>
        <h3 className='recipe__title'>{props.title}</h3>
        <img src={props.img} alt={props.title} className="recipe__img" />
        <article className='recipe__info'>
            <section className='recipe__timePrep'>
                <i class="fa-solid fa-timer"></i>
                <p>{props.prepTemp} + {props.cookingTemp}</p>
            </section>
            <section className='recipe__difficulty'>
                <i class="fa-solid fa-hat-chef"></i>
                <p>{props.level}</p>
            </section>
            <section className='recipe__stars'>
                <i class="fa-solid fa-hat-chef"></i>
                <p>{props.stars}</p>
            </section>
        </article>
    </main>
  )
}

export default RecipeDetails