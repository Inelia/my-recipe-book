import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <article className="card">
        <img src={props.img} alt={props.title} className="card__img" />
        <h3 className='card__title'>{props.title}</h3>
        <p className='card__description'>{props.description}</p>
        <a className='card__link' href='#card'>Lire la suite</a>
    </article>
  )
}

export default Card