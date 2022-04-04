import React from 'react'
import Navigation from './../Navigation/Navigation'
import "./Header.css"


function Header() {
  return (
    <header>
            <h1>My Recipe Book</h1>
        {/* <nav className='navigation'>
                <a href="accueil">Accueil</a>
                <a href="starters">Entrées</a>
                <a href="mains">Plats</a>
                <a href="desserts">Dessert</a>
        </nav> */}
        <Navigation />
    </header>
  )
}

export default Header