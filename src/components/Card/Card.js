import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <article className="card">
        <img src={props.img} alt={props.title} className="card__img" />
        <h3 className='card__title'>{props.title}</h3>
        <p className='card__description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <a className='card__link' href='#card'>Lire la suite</a>
    </article>
  )
}

export default Card