import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <article className="card">
        <img src={props.img} alt={props.alt} className="card__img" />
        <h3 className='card__title'></h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

    </article>
  )
}

export default Card