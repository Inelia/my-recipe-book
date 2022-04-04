import React from 'react'
import './Card.css'
import { Link } from "react-router-dom"

function Card(props) {
  return (
    <article className="card">
        <img src={props.img} alt={props.title} className="card__img" />
        <h3 className='card__title'>{props.title}</h3>
        <p className='card__description'>{props.description}</p>
        <a className='card__link' href='#card'>Lire la suite</a>
        <Link to="/recipe/:title" className="card__link">Lire la suite</Link>
    </article>
  )
}

export default Card