import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header>
        <div>
            <h1>My Recipe Book</h1>
        </div>
        <nav>
                <a href="accueil">Accueil</a>
                
                <a href="starters">Entrées</a>
                
                <a href="mains">Plats</a>
                
                <a href="desserts">Déssert</a>
               
        </nav>
    </header>
  )
}

export default Header