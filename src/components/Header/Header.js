import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header>
        <div>
            <p>My Recipe Book</p>
        </div>
        <nav>
            <ul>
                <li>
                <a href="accueil">Accueil</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="starters">Entrées</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="mains">Plats</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="desserts">Déssert</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header